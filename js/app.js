//-- AngularJS --//
(function(){
    'use strict';

    var module = angular.module('app', ['onsen', 'ngSanitize']);

    module.controller('AppController', function ($scope, $http, $window, $rootScope, $sce) {
        $scope.streamURL = $sce.trustAsResourceUrl('http://myitmanager.co.za/pretoriafm/player.html');
        $scope.mapURL = $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7539543474313!2d28.29189631560485!3d-25.745649051741147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfdf1f40e32beb%3A0x2b680ca4d452012e!2sRadio+Pretoria!5e0!3m2!1sen!2sus!4v1456435667117');
    });
})();

// normal JS //
document.addEventListener('deviceready', function () {
    // Android customization
    cordova.plugins.backgroundMode.setDefaults({ text:'Play PTA FM.'});
    // Enable background mode
    cordova.plugins.backgroundMode.enable();

    // Called when background mode has been activated
    cordova.plugins.backgroundMode.onactivate = function () {
        setTimeout(function () {
            // Modify the currently displayed notification
            cordova.plugins.backgroundMode.configure({
                text:'Playing PTA FM.'
            });
        }, 5000);
    }
}, false);