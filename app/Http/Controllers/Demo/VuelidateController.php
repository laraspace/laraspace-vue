<?php

namespace Laraspace\Http\Controllers\Demo;

use Illuminate\Http\Request;
use Laraspace\Http\Controllers\Controller;

class VuelidateController extends Controller
{
    public function emailExist(Request $request){
        return $request->email;
    }
}
