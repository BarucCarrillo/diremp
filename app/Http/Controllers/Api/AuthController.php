<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    //
    public function register(Request $request){

        $response = ["success"=>"false"];
        //VALIDACION
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        if($validator-> fails()){
            $response = ["error" => $validator->errors()];

        return response()->json($response, 200);
        }

        $input = $request->all();
        $input["password"] = bcrypt($input['password']);

        $user = User::create($input);
        $user->assignRole('client');

        $response["success"] = true;
        //$response["token"] = $user-> createToken("YIYI")->plainTextToken;

        return response()->json($response, 200);
    }
}
