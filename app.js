// Different File ===================================
var fileUpload = function(number) {

    this.numColumns = number;
    this.numRows = 200;
    this.latColumn = number % 3;
    this.nameColumn = 1;
    this.lngColumn = null;
    this.headers = ['id_number', 'location', 'latitude'];
}

var file1 = new fileUpload(5);
var file2 = new fileUpload(8);

//======================================================

var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', function($scope) {

    $scope.address =
        {'state': ['AL', 'MA']}
    ;

    $scope.lov_state = [
        {'lookupCode': 'AL', 'description': 'Alabama'},
        {'lookupCode': 'FL', 'description': 'Florida'},
        {'lookupCode': 'CA', 'description': 'California'},
        {'lookupCode': 'DE', 'description': 'Delaware'}
    ];

    $scope.uploadedFile = file1;
});







