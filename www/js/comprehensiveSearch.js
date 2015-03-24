var total_score;

function update() {
    var name = document.getElementById("search").value;
    document.getElementById("procedureName").innerHTML = name;
    document.getElementById("basicScore").innerHTML = get_score(name);
    total_score = get_score(name);
    document.getElementById("totalScore").innerHTML = total_score;
}

function get_score(name){
    for (var i = 0; i < procedures.length; i++){
        if (procedures[i].text == name){
            return procedures[i].score;
        }
    }
}

function send_score(){
    document.getElementById("totalScore").innerHTML = total_score;
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