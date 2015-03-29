function update() {
    var name = document.getElementById("search").value;
    var index = get_index(name);
    document.getElementById("procedureName").innerHTML = name;
    document.getElementById("basicScore").innerHTML = get_score(index);
    document.getElementById("mortality").innerHTML = get_mortality(index);
    document.getElementById("morbidity").innerHTML = get_morbidity(index);
    document.getElementById("difficulty").innerHTML = get_difficulty(index);
}

function get_index(name){
    for (var i = 0; i < procedures.length; i++){
        if (procedures[i].text == name){
            return i;
        }
    }
}

function get_score(index){
    return procedures[index].score;
}

function get_mortality(index){
    return procedures[index].mortality;
}

function get_morbidity(index){
    return procedures[index].morbidity;
}

function get_difficulty(index){
    return procedures[index].difficulty;
}


angular.module('starter', ['ionic', 'autocomplete.directive'])

.controller('BasicCtrl', function ($scope) {
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