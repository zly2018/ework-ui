/**
 * Created by Liyong.zhu on 2016/4/6.
 */
angular.module('ework-ui')
    .controller('TopHeadCtrl', ['$scope','$rootScope', '$log','MenusService', TopHeadCtrl]);

function TopHeadCtrl($scope ,$rootScope, $log,MenusService){
    /*$scope.topMenus = {};

    if(MenusService){
        $log.info("found service MenusService.");
        MenusService.get({},function(res){
            $log.info("found service result.");
            if(res.error == 'false'){
                $scope.topMenus = res.menus;
                $log.info("found service result."+res);
                $.each($scope.topMenus,function(i,menu){
                    if(menu.active=='true'){
                        $rootScope.curSystem = menu;
                        $log.info("menu active is " + menu.name);
                    }
                })
            }
        });
    }

    $scope.selectSystem = function(sys){
        $rootScope.curSystem = sys;
    }*/
}