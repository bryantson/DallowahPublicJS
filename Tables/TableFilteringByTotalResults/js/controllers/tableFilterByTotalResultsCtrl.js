/**
 * DallowahJS: tableFilterByTotalResultsCtrl.js
 * @author Bryant Son
 * @since 02/25/2017
 */
var appDallowah = angular.module("AppDallowah",[]);

appDallowah.controller("TableFilterByTotalResults", function($scope) {
  $scope.listCities = ["Dallas", "Flower Mound", "Coppell", "Irving", "Grapevine", "Allen", "The Colony", "Carrollton", "Southlake", "Westlake","Fort Worth","Arlington","Euless"];

  $scope.listResultTotals = [5, 10, 'ALL'];

  $scope.countTotalResults = 0;

  $scope.change2TotalResult = function(num) {
    console.log("NUM: " + num);
    $scope.selectedTotalResults = num;
  }
});
