angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout, $ionicPopup, $ionicSideMenuDelegate, $firebase) {



  var ref = new Firebase("https://torid-fire-7268.firebaseio.com/");
  var sync = $firebase(ref);
  // create a synchronized array for use in our HTML code
  $scope.messages = sync.$asArray();
  



 $scope.addMessage = function(text) {



      if (text) {

        var timestamp = Date.now();
        $scope.messages.$add({
          text:text,
          timestamp:timestamp,
        });
        
      };
      

    
  };


  // SIDE MENU TRIGGER
  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

  // PULL DOWN REFRESH
  $scope.doRefresh = function() {
    $http.get('')
     .success(function(newItems) {
       // $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };

})

.controller
