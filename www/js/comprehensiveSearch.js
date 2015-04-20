function update() {
    var name = document.getElementById("search").value;
    document.getElementById("name").innerHTML = name;
    document.getElementById("b_score").innerHTML = parseFloat(get_score(name)).toFixed(1);
    total_score = parseFloat(get_score(name)).toFixed(1);
    window.localStorage['procedure_score'] = total_score;
    document.getElementById("total_main").innerHTML = total_score;
    window.localStorage['procedure_text'] = name;
    enable_buttons();
    localStorage.setItem("procedure" + 0,name);
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