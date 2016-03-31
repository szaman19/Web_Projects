(function(){
var app = angular.module('store',[]);
var gems = [{
  name: "Dodecahedron",
  price: 2.95,
  description: '...',
  canPurchase: true,
  soldOut: true
},{
  name: "Pentagonal Gem",
  price: 5.95,
  description: "...",
  canPurchase: true
}];

app.controller('StoreController',function(){
  this.products = gems;
});


})();
