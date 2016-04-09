(function() {
  var app = angular.module('store', []);

  var info = [{
    "name": "Python",
    "creator": "Guido van Rossum",
    "history": "",
    "description": "A multi-paradigm programing language with OOP, functional and structured programming support",
    "version": "2.7 and 3.5",
    "website": "www.python.org",
    "frameworks": [{
      "name": "Flask",
      "description": "Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.",
      "version": "0.10.1",
      "image": "",
      "website": "http://flask.pocoo.org/",
      "resources": [
        "http://flask.pocoo.org/docs/0.10/"
      ]
    }, {
      "name": "Django",
      "description": "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.",
      "version": "1.9.5",
      "image": "",
      "website": "www.djangoproject.com",
      "resources": [
        "https://docs.djangoproject.com/en/1.9/"
      ]
    }],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/260px-Python_logo_and_wordmark.svg.png"
  }, {
    "name": "Ruby",
    "creator": "Yukihiro \"Matz\" Matsumoto",
    "history": "",
    "description": "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",
    "version": "2.3",
    "website": "www.ruby-lang.org",
    "frameworks": [{
      "name": "Ruby on Rails",
      "description": "Learning to build a modern web application is daunting. Ruby on Rails makes it much easier and more fun. It includes everything you need to build fantastic applications, and you can learn it with the support of our large, friendly community.",
      "version": "5.0.0",
      "image": "",
      "website": "www.rubyonrails.org/",
      "resources": [
        "http://guides.rubyonrails.org/"
      ]
    }],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png"
  }, {
    "name": "PHP",
    "creator": "Rasmus Lardof",
    "history": "",
    "description": "PHP is a popular general-purpose scripting language that is especially suited to web development. \nFast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
    "version": "5.5",
    "website": "www.php.net",
    "frameworks": [{
      "name": "Laravel",
      "description": "Love beautiful code? We do too.The PHP Framework For Web Artisans",
      "version": "5.2",
      "image": "",
      "website": "www.laravel.com",
      "resources": [
        "https://laravel.com/docs/5.2"
      ]
    }, {
      "name": "Slim",
      "description": "Slim is a PHP micro framework that helps you quickly write simple yet powerful web applications and APIs.",
      "version": "3.3",
      "image": "",
      "website": "http://www.slimframework.com/",
      "resources": [
        "http://www.slimframework.com/docs/"
      ]
    }],
    "image": "http://www.webdesign-hints.com/wp-content/uploads/2015/07/2000px-php-logo-svg_.png"
  }]

  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = info;
    // $http.get('info.json').success(function(data) {
    //   store.products = data;
    // });
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
