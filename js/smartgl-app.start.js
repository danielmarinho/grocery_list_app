angular.module('SmartGL',[

])
.controller('MainController', function($scope){
  $scope.name = "Daniel Rossi Marinho";

  $scope.is_creating_recipe = false;
  $scope.is_creating_grocery_list = false;
  $scope.current_recipe = null;
  $scope.current_list = null;
  $scope.is_item_from_recipe = false;
  $scope.recipe_temp_name = "";

$scope.r_item_name = "";
$scope.r_item_amount = "";
$scope.recipe_items = [];
$scope.list_items = [];

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

  $scope.grocery_lists = [
    {id: 0, name: "Default", date: (new Date()).toLocaleDateString(), items: [$scope.items[0]]}
  ];

  function createGroceryList(list,list_items){
    list.id = $scope.grocery_lists.length;
    list.items = list_items;
    list.date = (new Date()).toLocaleDateString();
    $scope.grocery_lists.push(list);
    $scope.r_item_name = "";
    $scope.r_item_amount = "";
    $scope.list_items = [];

    resetCreateListForm();
  }

  function resetCreateListForm(){
    $scope.new_list = {
      id: null,
      name: "",
      items: []
    }

  }

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

function is_showing_list(list){
  if(list==null){
    $scope.current_list = null;
    return false;
  }else{
    $scope.current_list = list;
    return true;
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
  $scope.is_showing_list = is_showing_list;
  $scope.createRecipe = createRecipe;
  $scope.resetCreateRecipeForm = resetCreateRecipeForm;
  $scope.resetCreateListForm = resetCreateRecipeForm;
  $scope.createGroceryList = createGroceryList;
})
