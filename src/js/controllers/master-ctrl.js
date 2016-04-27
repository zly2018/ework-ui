/**
 * Master Controller
 */

angular.module('ework-ui')
    .controller('MasterCtrl', ['$scope', '$log','$state','ProjectService','MenusService', MasterCtrl]);

function MasterCtrl($scope, $log,$state,MenusService) {
    $scope.topMenus = {};

    if(MenusService){
        $log.info("found service MenusService.");
        MenusService.get({},function(res){
            $log.info("found service result.");
            if(res.error == 'false'){
                $scope.topMenus = res.menus;
                $log.info("found service result."+res);
                $.each($scope.topMenus,function(i,menu){
                    if(menu.active=='true'){
                        $scope.curSystem = menu;
                        $log.info("menu active is " + menu.name);
                    }
                });
            }
        });
    };


    $scope.selectSystem = function(sys){
        $scope.curSystem.active = 'false';
        $scope.curSystem = sys;
        $scope.curSystem.active = 'true';

        if(sys.type=='$state'){
            $state.go(sys.value,{});
        }
    }

    function queryProjectInfo(){
        ProjectService.get({},function(resp){
            if(resp.error == 'false'){
                $scope.project = resp;
                $("title").text($scope.project.name);
            }
        });
    }

    queryProjectInfo();
}