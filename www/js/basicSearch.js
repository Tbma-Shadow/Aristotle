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
	score = parseFloat(procedures[index].score);
	score = score.toFixed(1);
    return score;
}

function get_mortality(index){
	mortality = parseFloat(procedures[index].mortality);
	mortality = mortality.toFixed(1);
    return mortality;
}

function get_morbidity(index){
	morbidity = parseFloat(procedures[index].morbidity);
	morbidity = morbidity.toFixed(1);
    return morbidity;
}

function get_difficulty(index){
	difficulty = parseFloat(procedures[index].difficulty);
	difficulty = difficulty.toFixed(1);
    return difficulty;
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