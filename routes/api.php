<?php

use Illuminate\Http\Request;
use Illuminate\Support\Route;
use App\Http\Controllers\Api\FrontController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\CategoriaController;
use App\Http\Controllers\Api\Admin\EmpresaController;
use App\Http\Controllers\Api\Client\EmpresaController as EmpresaClient;



Route::prefix('v1')->group(function ()  {
    ///PUBLIC
    Route::get('/public/{slug}',[FrontController::class,'categoria']);
    //::auth
    Route::get('/auth/register',[AuthController::class,'register']);
    Route::get('/auth/login',[AuthController::class,'login']);

    ///PRIVATE
    Route::group(['middleware' => 'auth:sanctum'], function (){
        Route::post('/auth/logout', [AuthController::class, 'logout']);

        ///ROL CLIENTE
        Route::apiResources('/client/empresa', [EmpresaClient::class]);

        //ROL ADMIN
        Route::apiResources('/admin/user', [UserController::class]);
        Route::apiResources('/admin/categoria', [CategoriaController::class]);
        Route::apiResources('/admin/empresa', [EmpresaController::class]);

    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});