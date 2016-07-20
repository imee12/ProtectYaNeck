angular.module('app.controllers', [])

.controller('pageCtrl', function($scope, $window, Questions) {

  $scope.askMe = function() {
//  $scope.list = ['a:(1,2)', 'b', 'c', 'd', 'e', 'f', 'g'];
$scope.list = Questions.all();
  $scope.rankedList = [];
  angular.forEach($scope.list, function(item) {
    $scope.rankedList.push({
        item: item,
        rank: 0.5 - $window.Math.random()
    });
});
}


$scope.showMe = function() {
  var ans = angular.element( document.querySelector( '#answerIt' ) );

  ans.removeClass('hide');
  console.log("answer");


}

})
