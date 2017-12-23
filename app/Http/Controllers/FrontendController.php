<?php

namespace Laraspace\Http\Controllers;

use Illuminate\Http\Request;

use Laraspace\Http\Requests;
use Laraspace\Space\Settings\Setting;

class FrontendController extends Controller
{
    public function index()
    {
        flash()->success('Welcome to Laraspace');
        return view('front.index');
    }

}
