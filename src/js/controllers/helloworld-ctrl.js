'use strict';
angular
    .module('ework-ui')
    .controller('HelloWorldCtrl', ['$scope','HelloService', HelloWorldCtrl]);

function HelloWorldCtrl($scope,HelloService) {
    $scope.message = 'Hello world!';

    //hello 查询
    $scope.hello = function(){
        HelloService.query({},function(resp){
            if(resp.error=='false'){
                alert(resp.message);
            }
        });
    };
}