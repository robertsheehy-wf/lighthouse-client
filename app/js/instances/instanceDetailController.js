/*
 * instanceDetailController
 * Main instance detailed view
 */

var _ = require('lodash');

function instanceDetailController($scope, $routeParams, instanceService, containerService) {
    'use strict';

    var host = $routeParams.host;
    $scope.instance = {};
    $scope.containers = {};

    instanceService.getInstances().then(
        // success
        function (instances) {
            $scope.instance = _.find(instances, {'name': host});
        },
        function (response) {
            console.log(response);
        }
    );

    containerService.list(host).then(
        // success
        function (containers) {
            $scope.containers = containers;
        },
        function (response) {
            console.log(response);
        }
    );
}

instanceDetailController.$inject = ['$scope', '$routeParams', 'instanceService', 'containerService'];
module.exports = instanceDetailController;