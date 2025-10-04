<?php

namespace App\Http\Controllers;

use App\Models\UnitRecord;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UnitRecordHistory_Controller extends Controller
{
    //

    public function unit_record_history(Request $request){

        $user_id = Auth::id();

        if(!$user_id){
            return response()->json([
                'success' => false,
                'message' => 'User not authenticated'
            ]);
        }

        $user_history = UnitRecord::where('user_id',$user_id)
                        ->orderBy('created_at','desc')
                        ->get();

        return response()->json([
            'success' => true,
            'history' => $user_history
        ],200);
    }
}
