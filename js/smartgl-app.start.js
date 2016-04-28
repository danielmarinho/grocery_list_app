angular.module('SmartGL',[

])
.controller('MainController', function($scope){
  $scope.name = "Daniel Rossi Marinho";

  $scope.active = "";

  $scope.items = [
    {"id": 0, "name": "Default", "amount": "0g"},
      {"id": 1, "name": "Bread", "amount": "550g"},
        {"id": 2, "name": "Eggs", "amount": "2x"},
          {"id": 3, "name": "Chocolate", "amount": "200g"}
  ];

  $scope.recipes = [
    {"id": 0, "name": "Default", "items": [$scope.items[3],$scope.items[1]]},
    {"id": 0, "name": "Kapsalon", "items": [$scope.items[0],$scope.items[2]]}
  ];

function menu_selected(){
return $scope.active = "active";
}
  $scope.menu_selected = menu_selected;
})
