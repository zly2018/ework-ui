'use strict';
/**
 * Hello World 查询服务
 */
angular.module('ework-ui').factory('HelloService', ['$resource',HelloService]);

/**
 * hello 服务
 * @param $resource
 * @returns {*}
 * @constructor
 */
function HelloService($resource){
    return $resource('data/helloworld.json', {}, {
        query: {method:'GET', params:{}, isArray:false}
    });
}