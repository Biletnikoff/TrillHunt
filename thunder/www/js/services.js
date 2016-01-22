angular.module('thunder.services', [])

.factory('User', function(){
  var o = {
    favorites: []
  };
  o.addProductToFavorites = function(product){
    // make sure there's a product to add
    if(!product) return false;

    o.favorites.unshift(product);
  }
  o.removeProductFromFavorites = function(product, index){
    // make sure there's a product to remove
    if(!product) return false;

    // removes product from favorites
    o.favorites.splice(index,1);
  }
  return o;

});
