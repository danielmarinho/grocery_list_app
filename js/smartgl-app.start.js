angular.module('SmartGL',[ 'ngStorage'

])
.controller('MainController', function($scope, $localStorage){
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
if($localStorage.items == null){
  $localStorage.items = [];
}

if($localStorage.recipes == null){
  $localStorage.recipes = [];
}

if($localStorage.grocery_lists == null){
  $localStorage.grocery_lists = [];
}

  $scope.items = $localStorage.items;

  $scope.recipes = $localStorage.recipes;

  $scope.grocery_lists = $localStorage.grocery_lists;

  function createGroceryList(list,list_items){
    list.id = $localStorage.grocery_lists.length;
    list.items = list_items;
    list.date = (new Date()).toLocaleDateString();
    $localStorage.grocery_lists.push(list);
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
  recipe.id = $localStorage.recipes.length;
  recipe.items = recipe_items;
  $localStorage.recipes.push(recipe)
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
