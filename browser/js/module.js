'use strict';

var juke = angular.module('juke', ["ui.router"]);

juke.config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/', '/albums');
})