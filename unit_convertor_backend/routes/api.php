<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\SignupController;
use App\Http\Controllers\UnitRecordController;
use App\Http\Controllers\UnitRecordHistory_Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

Route::post('/convert', function (Request $request) {
    $from = $request->from;
    $to = $request->to;
    $value = $request->value;

    try{
       $response  =  Http::withHeaders([
            'X-Api-Key' => env('NINJA_API_KEY'),
        ])->get('https://api.api-ninjas.com/v1/unitconversion',[
            'amount' => $value,
            'unit' => $from,
            'to' => $to
        ]);

        if($response->successful()){
            return response()->json($response->json());
        }else{
            return response()->json([
                'error' => 'Conversion failed',
                'status' => $response->status()
            ], $response->status());
        }
    }catch(error){

    }

});


Route::get('/history', function (){
    return response()->json([
        'from'=> 'meter',
        'to' => 'centimeter',
        'amount' => 200
    ]);
});


Route::post('/signup', [SignupController::class, 'signup']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/unit_record', [UnitRecordController::class, 'store']);
Route::middleware('auth:sanctum')->get('/history', [UnitRecordHistory_Controller::class, 'unit_record_history']);

Route::middleware('auth:sanctum')->post('/logout', function (Request $request){
    $request->user()->tokens()->delete();

    return response()->json([
        'success' => true,
        'message' => 'Logout Successfully'
    ]);
});
