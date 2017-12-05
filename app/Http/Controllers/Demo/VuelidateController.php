<?php

namespace Laraspace\Http\Controllers\Demo;

use Illuminate\Http\Request;
use Laraspace\Http\Controllers\Controller;
use Laraspace\User;

class VuelidateController extends Controller
{
    public function emailExist(Request $request){
        if(User::whereEmail($request->email)->first()){
            return 'false';
        }
        else{
            return 'true';
        }
    }
}
