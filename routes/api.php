<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'auth'], function () {
    Route::post('login','AuthController@authenticate');
    Route::get('logout','AuthController@logout');
    Route::get('check','AuthController@check');
});

Route::group(['prefix' => 'admin'], function (){

    // Todos
    Route::resource('todos', 'Demo\TodosController');

    Route::post('todos/toggleTodo/{id}', [
        'as' => 'admin.todos.toggle', 'uses' => 'Demo\TodosController@toggleTodo'
    ]);

    // Vuelidate
    Route::group(['prefix '=> 'vuelidate', 'middleware' => 'api.auth'], function (){

        Route::post('email-exist',[
            'as' => 'admin.vuelidate.email-exist',
            'uses' => 'Demo\VuelidateController@emailExist'
        ]);

    });
});

