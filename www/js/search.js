function update() {
    var name = document.getElementById("search").value;
    document.getElementsByName("name")[0].placeholder = name;
    document.getElementsByName("b_score")[0].placeholder = parseFloat(get_score(name));
    total_score = parseFloat(get_score(name));
    document.getElementsByName("total_main")[0].placeholder = total_score;
}

function get_score(name){
    for (var i = 0; i < procedures.length; i++){
        if (procedures[i].text == name){
            return procedures[i].score;
        }
    }
}

angular.module('starter', ['ionic', 'autocomplete.directive'])

.controller('ComprehensiveCtrl', function ($scope) {
    var value;
    $scope.items = [];
    $scope.string;
    for (var i = 0; i < procedures.length; i++){
        $scope.string = procedures[i].text;
        $scope.items[i] = {display : $scope.string};
    }
    $scope.onSelect = function (item) {
        console.log('item', item);
    };
});