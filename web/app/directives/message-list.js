'use strict';

angular.module('myResumeApp')
    .directive('message-list', function(){
        return {
            restrict : 'E',
            templateUrl : 'app/views/directives/message-list.html',
            scope : {
                coordonnee : '='
            },
            link : function(scope){

            }
        }
    });
