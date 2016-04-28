angular.module('SmartGL',[

])
.controller('MainController', function($scope){
  $scope.name = "Daniel Rossi Marinho";

  $scope.is_creating_recipe = false;
  $scope.is_creating_grocery_list = false;
  $scope.current_recipe = null;

$scope.r_item_name = "";
$scope.r_item_amount = "";
$scope.recipe_items = [];

  $scope.items = [
    {"id": 0, "name": "Default", "amount": "0g"},
      {"id": 1, "name": "Bread", "amount": "550g"},
        {"id": 2, "name": "Eggs", "amount": "2x"},
          {"id": 3, "name": "Chocolate", "amount": "200g"}
  ];

  $scope.recipes = [
    {"id": 0, "name": "Default", "items": [$scope.items[3],$scope.items[1]]},
    {"id": 1, "name": "Kapsalon", "items": [$scope.items[0],$scope.items[2]]}
  ];

function createRecipe(recipe,recipe_items){
  recipe.id = $scope.recipes.length;
  recipe.items = recipe_items;
  $scope.recipes.push(recipe);
  $scope.r_item_name = "";
  $scope.r_item_amount = "";
  $scope.recipe_items = [];

  resetCreateRecipeForm();
}
function resetCreateRecipeForm(){
  $scope.newRecipe = {
    id: null,
    name: "",
    items: []

  }

}

function is_showing_recipe(recipe){
  if(recipe==null){
    $scope.current_recipe = null;
    return false;
  }else{
    $scope.current_recipe = recipe;
    return true;
  }

}
  $scope.is_showing_recipe = is_showing_recipe;
  $scope.createRecipe = createRecipe;
  $scope.resetCreateRecipeForm = resetCreateRecipeForm;
})
