(function(){
var app = angular.module('store',[]);
var gems = [{
  name: "Python",
  version: 3.5,
  price: 2.95,
  description: '...',
  canPurchase: true,
  soldOut: true
},{
  name: "Ruby",
  version:,
  price: 5.95,
  description: "...",
  canPurchase: true
},
{
  name: "PHP",
  version: ,
  price: 6,
  description: "...",
  canPurchase: true
}];

app.controller('StoreController',function(){
  this.products = gems;
});


})();
