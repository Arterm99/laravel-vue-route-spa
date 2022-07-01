<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;

class IndexController extends Controller
{
    public function __invoke()
    {
        $people = Person::all();
        // Вызываем $person через ресурс::collection
        // collection позволяет отправлять данные в виде массива
        return PersonResource::collection($people);

    }
}
