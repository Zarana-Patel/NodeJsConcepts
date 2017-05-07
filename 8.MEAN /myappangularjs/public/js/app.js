var myapp = angular.module('myapp',[]);

myapp.controller('myController',function($scope){
      $scope.name = 'zarana';
      console.log($scope.name);
      $scope.people = [
          {
            name: 'zarana'
          },
          {
            name:'ABCD'
          },
          {
            name:'DEFG'
          }


      ];


});
