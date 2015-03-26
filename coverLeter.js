function Ctrl($scope) {
	// constants
	$scope.date = new Date();
	
	// Person's info
    $scope.firstName = "John",
    $scope.lastName = "Doe",
	$scope.Address1 = "123 Main",
	$scope.city = "Houston",
	$scope.state = "TX",
	$scope.zip = "77081"
	$scope.phone = "123-456-7890",
	$scope.email = "me@mydomain.com",
	
	// company info
	$scope.company = "Apple",
	$scope.CoAddress = "1 Infinite Loop",
	$scope.CoCity = "Cupertino",
	$scope.CoState = "CA",
	$scope.CoZip = "95014",
	$scope.CoContact = "Steve Jobs",
	
	// job information
	$scope.position = "Software Developer",
	$scope.heardfrom = "a job posting on your website",
	$scope.brief = "Developing, coordinating and implementing social media efforts",
	$scope.sinceI ="enjoy finding new ways to provide the most current information to the end user and finding new ways to bring business and creating inbound traffic to specific content",
	$scope.afterjobdes = "Online communication truly is the most effective way to reach out to individuals. Maintaining social media content and websites is essential in today's technology based society."
}