//-- AngularJS --//
(function(){
    'use strict';

    var module = angular.module('app', ['onsen', 'ngSanitize']);

    module.controller('AppController', function ($scope, $http, $window, $rootScope, $sce) {
        $scope.streamURL = $sce.trustAsResourceUrl('http://myitmanager.co.za/pretoriafm/player.html');
        $scope.mapURL = $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7539543474313!2d28.29189631560485!3d-25.745649051741147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfdf1f40e32beb%3A0x2b680ca4d452012e!2sRadio+Pretoria!5e0!3m2!1sen!2sus!4v1456435667117');
        
        $scope.playAudio = function() {
            var audioUrl = "http://capeant.antfarm.co.za:1935/pretoriafm/pretoriafm.stream/playlist.m3u8";

            // Play an audio file (not recommended, since the screen will be plain black)
            window.plugins.streamingMedia.playAudio(audioUrl);

            // Play an audio file with options (all options optional)
            var options = {
                bgColor: "#65c8d0",
                bgImage: "http://www.pretoriafm.co.za/wp-content/uploads/2015/07/pretoria-fm-logo-retina.png",
                bgImageScale: "fit", // other valid values: "stretch"
                initFullscreen: false, // true(default)/false iOS only
                successCallback: function() {
                    console.log("Player closed without error.");
                },
                errorCallback: function(errMsg) {
                    console.log("Error! " + errMsg);
                }
            };
            window.plugins.streamingMedia.playAudio(audioUrl, options);

            // Stop current audio
            window.plugins.streamingMedia.stopAudio();

            // Pause current audio (iOS only)
            window.plugins.streamingMedia.pauseAudio();

            // Resume current audio (iOS only)
            window.plugins.streamingMedia.resumeAudio();  
        };
    });
})();

// normal JS //
document.addEventListener('deviceready', function () {
    console.log(Media);
    playAudio("http://capeant.antfarm.co.za:1935/pretoriafm/pretoriafm.stream/playlist.m3u8");
}, false);

function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}