<?php
namespace Laraspace\Http\Controllers\Demo;

use Laraspace\User;
use Illuminate\Http\Request;
use Laraspace\Http\Controllers\Controller;

class PagesController extends Controller
{
    public function emailExist(Request $request)
    {
        if (User::whereEmail($request->email)->first()) {
            return 'false';
        } else {
            return 'true';
        }
    }

    public function allUsers() {
       return $users = User::paginate(5);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return $users = User::all();
    }
}
