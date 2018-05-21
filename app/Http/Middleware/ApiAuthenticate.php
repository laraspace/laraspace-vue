<?php
namespace App\Http\Middleware;

use App\Exceptions\JWTInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Closure;

class ApiAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (JWTAuth::getToken() && JWTAuth::parseToken()->authenticate()) {
            $user = JWTAuth::parseToken()->authenticate();
        } else {
            return response()->json(['error' => 'user_not_found'], 404);
        }
        return $next($request);
    }
}