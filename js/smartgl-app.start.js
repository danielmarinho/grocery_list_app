angular.module('SmartGL',[

])
controller('MainController', function($scope){
  $scope.itens = [
    {"id": 0, "name": "Default", "amount": "0g"}
  ];

  $scope.recipes = [
    {"id": 0, "Name": "Default", "itens": ["Default"]}
  ];
})
