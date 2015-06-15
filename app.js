// Different File ===================================
var fileUpload = function() {

    this.numColumns = 5;
    this.numRows = 200;
    this.latColumn = 2;
    this.nameColumn = 1;
    this.lngColumn = null;
    this.headers = ['id_number', 'location', 'latitude', 'lonGitude', 'wellness'];

    this.latName = function () {
        if (this.latColumn != null) {
            return this.headers[this.latColumn]
        }
    };

    this.longName = function () {
        if (this.lngColumn != null) {
            return this.headers[this.lngColumn]
        }
    };

    this.nameName = function () {
        if (this.nameColumn != null) {
            return this.headers[this.nameColumn]
        }
    };
}


var file1 = new fileUpload();


//======================================================

var myApp = angular.module('myApp', [])
//    .config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/upload', {templateUrl: 'partials/uploaded.html', controller: 'MyCtrl'});
//    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//    $routeProvider.otherwise({redirectTo: '/view1'});
//}]);

myApp.controller('MyCtrl', function($scope) {
    $scope.uploadedFile = file1;

    $scope.latName = file1.latName();
    $scope.nameName = file1.nameName();
    $scope.longName = file1.longName();

});







