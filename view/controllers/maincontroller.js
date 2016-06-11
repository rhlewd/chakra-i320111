/* global angular */
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', function($scope) {
  $scope.invest_tab = function(){
    $scope.total_investment = "100,000";
    $scope.total_investment_desc = "Total Investments";
    $scope.outstanding_investments = "64,000";
    $scope.outstanding_investments_desc = "Outstanding Investments";
    $scope.interest_earned = "21,200";
    $scope.interest_earned_desc = "Total Interest Earned";
    $scope.outstanding_interests = "1,600";
    $scope.outstanding_interests_desc = "Outstanding Interests";
  };
  
  $scope.invest_tab();
  
  $scope.loan_tab = function(){
    $scope.total_investment = "90,000";
    $scope.total_investment_desc = "Total Loans";
    $scope.outstanding_investments = "24,000";
    $scope.outstanding_investments_desc = "Outstanding Loan";
    $scope.interest_earned = "11,800";
    $scope.interest_earned_desc = "Total Interest Paid";
   $scope.outstanding_interests = "1,980";
    $scope.outstanding_interests_desc = "Outstanding Interest Paid";
  };
  
    
}]);
