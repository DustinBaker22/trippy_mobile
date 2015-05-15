(function(){

  angular.module('trippy_app')
  .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['$http', $stateParams];

  function ApplicationController($http, $stateParams){

    // Capture Variable
    var self = this;

    // Create a promise
    var promise = $http.get('https://trippyga.herokuapp.com/api/trippys').success(function(data, status, headers, config){
      return data;
    });


    // This then function waits until the asynchronous javascricpt get request has completed before attaching the variable response.data to self.smoothies
    promise.then(function(response) {
      self.trippys = response.data;
    });

    if($stateParams.trippyId){
      var trippy = $http.get('https://trippyga.herokuapp.com/api/trippy/' + $stateParams.trippyId).success(function(data, status, header, config){
        return data;
      });
      trippy.then(function(response){
        self.trippy = response.data;
      });
  }
}


})();