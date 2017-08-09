var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
    console.log($scope);
    $scope.first = 1;
    $scope.second = 1;
    $scope.updateValue = function() {
        $scope.calculation = $scope.first + ' + ' + $scope.second + " = " + (+$scope.first + +$scope.second);
    };
    $scope.users = ['gandalf'];
    (function() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {if (Math.random() < 0.5) throw Error("me err") ;return res;})
        .then(res => ({ result: res, err: false }))
        .catch(err => ({err: err}))
        .then(res => { 
            $scope.users = res;
            $scope.$apply();
         });
    })();
    $scope.click = function(user) {
        alert(user.email)
    }
});