/*
 * routeConfig
 * Manage routing control and inject templates into main view.
 */
function routeConfig($routeProvider) {
    $routeProvider
        // Authentication
        .when('/login', {
            template: require('../auth/templates/login.html'),
            controller: 'loginController'
        })
        // Functionality
        .when('/beacons', {
            template: require('../beacons/templates/beacons.html'),
            controller: 'beaconController'
        })
        .when('/instances', {
            template: require('../instances/templates/instances.html'),
            controller: 'instanceController'
        })
        .when('/instances/:host', {
            template: require('../instances/templates/instance.html'),
            controller: 'instanceDetailController'
        })
        .when('/instances/:host/container/:id', {
            template: require('../instances/templates/container.html'),
            controller: 'containerController'
        })
        .otherwise({ redirectTo: '/' });
}

routeConfig.$inject = ['$routeProvider'];
module.exports = routeConfig;
