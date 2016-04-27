/**
 * Created by Liyong.zhu on 2016/4/6.
 */
'use strict';
angular.module('ework-ui').factory('ProjectService', [ '$resource', ProjectService ]);

angular.module('ework-ui').factory('MenusService', [ '$resource', MenusService ]);

/**
 * 项目定义信息
 * @param $resource
 * @returns {*}
 * @constructor
 */
function ProjectService($resource){
    return $resource('data/project.json', {}, {
        query : {
            method : 'GET',
            params : {},
            isArray : false
        }
    });
}

/**
 * 左侧导航菜单
 * @param $resource
 * @returns {*}
 * @constructor
 */
function MenusService($resource){
    return $resource('data/menus.json', {}, {
        query : {
            method : 'GET',
            params : {},
            isArray : false
        }
    });
}