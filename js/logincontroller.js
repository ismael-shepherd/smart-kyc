crypbrokersApp.controller('loginCntl', function ($scope,$http) {
    $http.defaults.headers.post["Accept"] = "";
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.details={
        email:'',
        password:'',
    };

    $scope.logIn= function (){
        if (!$scope.details.email && !$scope.details.password){
            showError('Please enter your details','error',true);
            return;
        }
        if(!isNaN($scope.details.email.split('@')[0])){
            showError('Please enter email','error',true);
            return ;
        }
        if(!$scope.details.password){
            showError('Please enter password','error',true);
            return;
        }

        console.log('userRegistration_email='+$scope.details.email+
            '&&userRegistration_password='+$scope.details.password);
        var data = 'userRegistration_email='+$scope.details.email+
            '&&userRegistration_password='+$scope.details.password;

        var postData = data;
        var requestObj = {
            method: 'POST',
            url: ServerApi+'login.php',
            data: postData
        };
        $http(requestObj).success(function (data) {
            console.log(data);
            // $window.location.href = '/home.html';
            showError('Successfully loggedIn','success',true)

        }).error(function (data, err) {
            console.log(data);
            console.log(err);
            showError('errooooor','error',true)


        });
    };
});