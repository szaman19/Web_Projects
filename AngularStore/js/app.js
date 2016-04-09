(function() {
  var app = angular.module('store', []);
  
  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];
    $http.get('info.json').success(function(data) {
      store.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.controller('TabController', function() {
    this.tab = 0;
    this.tabDef = 0
    this.setTab = function(num) {
      this.tab = num;
      console.log(num);
      this.tabDef = 1;
    };
    this.isDef = function(){
      console.log(this.tabDef == 0);
      return this.tabDef == 0;
    }
    this.isSet = function(num) {
      return this.tab === num;
    };
  });
})();
