<?php

namespace App\Http\Resources\Person;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
{
    /**
    * В ресурсах отдаем инфу на фронт
    */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'age' => $this->age,
            'job' => $this->job,
        ];
    }
}
