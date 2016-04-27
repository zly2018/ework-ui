/**
 * Created by Liyong.zhu on 2016/4/6.
 */
angular
    .module('ework-ui')
    .controller('LeftNavCtrl', ['$scope', '$rootScope','$log','$state',LeftNavCtrl]);

function LeftNavCtrl($scope,$rootScope,$log,$state) {
    $scope.curNavSystem = null;

    $scope.selectNav = function(menu){
        if($scope.curNavSystem){
            $scope.curNavSystem.active = 'false';

        }
        $scope.curNavSystem = menu;
        $scope.curNavSystem.active = 'true';
        if(menu.menus&&menu.menus.length){
            if(menu.open){
                menu.open = false;
            }else{
                menu.open = true;
            }
        }

        if(menu.type=='$state'){
            $state.go(menu.value,{});
        }
    }
    $scope.isNavDown = false;
    $scope.downNav = function(){
        if($scope.isNavDown){
            $scope.isNavDown = false;
        }else{
            $scope.isNavDown = true;
        }
    }
}