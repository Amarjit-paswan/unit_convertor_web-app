<?php

use App\Http\Controllers\SignupController;
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
