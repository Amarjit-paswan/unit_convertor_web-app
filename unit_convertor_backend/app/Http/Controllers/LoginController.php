<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request){

        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $user_fetch = User::where('email',$request->email)->first();


        // Password hash check 
        if(!$user_fetch || !Hash::check($request->password, $user_fetch->password)){
            return response()->json([
                'success' => false,
                'message' => 'Credentials Invalid'
            ],422);
        }

        return response()->json([
            'success' => true,
            'message' => 'Login successfully',
            'user' => [
                'username' => $user_fetch->username,
                'email' => $user_fetch->email,
                'id' => $user_fetch->id
            ],
            'token' => $user_fetch->createToken('api_token')->plainTextToken
        ]);

    }
}
