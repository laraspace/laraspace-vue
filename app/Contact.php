<?php

namespace Laraspace;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    public function labels()
    {
        return $this->belongsToMany(Label::class);
    }
    public function getDobAttribute($value)
    {
    	return Carbon::parse($value)->format('d/m/Y');
    }


}
