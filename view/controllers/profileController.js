var helloApp = angular.module("helloApp", []);
helloApp.controller("CompanyCtrl", function($scope) {
$scope.loan_hide = true;
$scope.invest_hide = false;
$scope.companies = [
                    { 'Borrower':'Naresh - IXXXXXX',
                    	'Date': '3 April 2016',
                    	'Amount': 8000,
                        'EMI' : 6,
                        'Received' : 1427,
                        'Outstanding' : 7133
                    },
                    	{ 'Borrower':'Mike - IXXXXXX',
                    	'Date': '21 Mar 2016',
                    	'Amount': 2000,
                        'EMI' : 3,
                        'Received' : 464,
                        'Outstanding' : 1300
                    },
	                    { 'Borrower':'Andy - IXXXXXX',
                    	'Date': '11 March 2016',
                    	'Amount': 7000,
                        'EMI' : 5,
                        'Received' : 3000,
                        'Outstanding' : 4800
                    },
		                    	{ 'Borrower':'Allen - IXXXXXX',
                    	'Date': '8 Feb 2016',
                    	'Amount': 10000,
                        'EMI' : 8,
                        'Received' : 4500,
                        'Outstanding' : 6800
                    },
			        { 'Borrower':'Sam - IXXXXXX',
                    	'Date': '14 Jan 2016',
                    	'Amount': 4000,
                        'EMI' : 0,
                        'Received' : 4200,
                        'Outstanding' : 0
                    },
                    ];
$scope.addRow = function(){		
	$scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
	$scope.name='';
	$scope.employees='';
	$scope.headoffice='';
};

$scope.loan_tab = function(){		
$scope.companies = [
                    { 'Borrower':'Claire - IXXXXXX',
                    	'Date': '4 Oct 2015',
                    	'Amount': 4000,
                        'EMI' : 4,
                        'Received' : 1286,
                        'Outstanding' : 3000
                    },
                    	{ 'Borrower':'Michael - IXXXXXX',
                    	'Date': '21 Nov 2015',
                    	'Amount': 1000,
                        'EMI' : 3,
                        'Received' : 464,
                        'Outstanding' : 800
                    },
	                    { 'Borrower':'Andrew - IXXXXXX',
                    	'Date': '11 Dec 2015',
                    	'Amount': 8000,
                        'EMI' : 5,
                        'Received' : 5870,
                        'Outstanding' : 4860
                    },
		                    	{ 'Borrower':'Loren - IXXXXXX',
                    	'Date': '8 Feb 2016',
                    	'Amount': 1000,
                        'EMI' : 2,
                        'Received' : 765,
                        'Outstanding' : 453
                    },
			        { 'Borrower':'Sara - IXXXXXX',
                    	'Date': '7 April 2016',
                    	'Amount': 6700,
                        'EMI' : 4,
                        'Received' : 3200,
                        'Outstanding' : 4574
                    },
                    ];
};

$scope.invest_tab = function(){		
$scope.companies = [
                    { 'Borrower':'Naresh - IXXXXXX',
                    	'Date': '3 April 2016',
                    	'Amount': 8000,
                        'EMI' : 6,
                        'Received' : 1427,
                        'Outstanding' : 7133
                    },
                    	{ 'Borrower':'Mike - IXXXXXX',
                    	'Date': '21 Mar 2016',
                    	'Amount': 2000,
                        'EMI' : 3,
                        'Received' : 464,
                        'Outstanding' : 1300
                    },
	                    { 'Borrower':'Andy - IXXXXXX',
                    	'Date': '11 March 2016',
                    	'Amount': 7000,
                        'EMI' : 5,
                        'Received' : 3000,
                        'Outstanding' : 4800
                    },
		                    	{ 'Borrower':'Allen - IXXXXXX',
                    	'Date': '8 Feb 2016',
                    	'Amount': 10000,
                        'EMI' : 8,
                        'Received' : 4500,
                        'Outstanding' : 6800
                    },
			        { 'Borrower':'Sam - IXXXXXX',
                    	'Date': '14 Jan 2016',
                    	'Amount': 4000,
                        'EMI' : 0,
                        'Received' : 4200,
                        'Outstanding' : 0
                    },
                    ];
    
    
    
};

});