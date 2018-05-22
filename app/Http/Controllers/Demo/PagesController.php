<?php
namespace App\Http\Controllers\Demo;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

    public function allUsers()
    {
       return $users = User::whereRole('user')->paginate(5);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return $users = User::all();
    }
}
