<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UnitRecord extends Model
{
    //
    protected $fillable = [
        'user_id', 'from_unit', 'to_unit', 'value', 'result'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
