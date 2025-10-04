<?php

namespace App\Http\Controllers;

use App\Models\UnitRecord;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class UnitRecordController extends Controller
{
    //
    public function store(Request $request){

        try{
            $validated = $request->validate([
                'from_unit'=>'string|required',
                'to_unit'=>'string|required',
                'value'=>'numeric|required',
                'result'=>'numeric|required',
                'user_id' => 'required|exists:users,id'
            ]);

            $record = UnitRecord::create($validated);

            return response()->json([
                'success'=> true,
                'message' => 'Unit Record Created Successfully',
            ],200);

        }catch(QueryException $e){
            //Database realated error
            return response()->json([
                'success' => false,
                'message' => 'Database error occurred',
                'error' => $e->getMessage()
            ]);
        }catch (Exception $e){
            //Server realated error
            return response()->json([
                'success' => false,
                'message' => 'Something error in server',
                'error' => $e->getMessage()
            ]);
        }

    }
}
