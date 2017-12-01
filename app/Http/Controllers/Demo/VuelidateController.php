<?php

namespace Laraspace\Http\Controllers\Demo;

use Illuminate\Http\Request;
use Laraspace\Http\Controllers\Controller;
use Laraspace\User;
use Illuminate\Support\Facades\DB;

class VuelidateController extends Controller
{

    public function emailExist(Request $request){
        $email=$request->email;
//        $user =
        if(User::where('email', '=', $email)->first())
        {
            return "true";
        }
        else{
            return "false";
        }

    }
}
