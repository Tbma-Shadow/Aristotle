var dependent_factor = [];

function navigate_back_button(){	
	var index = localStorage.getItem("index");
	index = parseInt(index);
	if (index == 0){
		location.href = "comprehensive.html";
	}
    else{
    	index = index - 1;
    	localStorage.setItem("index",index);
    	window.localStorage['procedure_text'] = localStorage.getItem("procedure" + index);
    	location.reload();
    	
    }
}

function getIndex(procedure){
	for (var x = 0; x < dependent_factors.length; x++){
		if (procedure == dependent_factors[x].procedure){
			return x;
		}
	}
}

function addToArray(x){
	x++;
	while(dependent_factors[x].id == null){
		dependent_factor.push({text: dependent_factors[x].factor, score: dependent_factors[x].score});
		x++;
		if (dependent_factors[x] == null){
			break;
		}
	}
}

function populateArray(){
	var procedure = window.localStorage['procedure_text'];
	var i = getIndex(procedure);
	addToArray(i);
}
	
function store_score(){
	store_state();
	var current_score = document.getElementById("total_main").innerHTML;
	window.localStorage['total'] = current_score;
}

function enable_buttons(){
	var procedure = window.localStorage['procedure_text'];
	if (!procedureHasFactors(procedure)){
		document.getElementById("dependent").disabled = true;
	}
	else if (procedureHasFactors(procedure)){
		document.getElementById("dependent").disabled = false;
	}
    document.getElementById("independent").disabled = false;
}

function procedureHasFactors(procedure){
	var index = getIndex(procedure);
	var counter = 0;
	var i = index + 1;
	while(dependent_factors[i].id == null){
		i++;
		counter++;
		if(dependent_factors[i] == null){
			break;
		}
	}
	if (counter > 0){
		return true;
	}
	return false;
}

function intilaise_checkboxArray(){
	var checkArray = [];
	checkArray.put("fsafs");
	window.localStorage['cArray'] = checkArray;
}

function store_state(){
	window.localStorage['procedure_text'] = document.getElementById("name").innerHTML;
	window.localStorage['procedure_score'] = document.getElementById("b_score").innerHTML;
	window.localStorage['total'] = document.getElementById("total_main").innerHTML;
}

function get_current_state(){
	var x = window.localStorage['procedure_text'];
	if (x != null){
	    document.getElementById("b_score").innerHTML = parseFloat(window.localStorage['procedure_score']).toFixed(1);
		document.getElementById("name").innerHTML = window.localStorage['procedure_text'];
		document.getElementById("total_main").innerHTML = parseFloat(window.localStorage['total']).toFixed(1);
	}
	window.localStorage['procedure_score']= document.getElementById("b_score").innerHTML;
	window.localStorage['procedure_text']= document.getElementById("name").innerHTML;
	window.localStorage['total']= document.getElementById("total_main").innerHTML;
}

function update_total_score(id){
	var score = window.localStorage['total'];
	score = parseFloat(score).toFixed(1);
	document.getElementById(id).innerHTML = score;
}

function update_score(id,index) {
	var ide,i;
	if (index == 0){
		ide = "general_total";
	}
	else if (index == 1){
		ide = "clinical_total";
	}
	else if (index == 2){
		ide = "extracardiac_total";
	}
	else if (index == 3){
		ide = "surgical_total";
	}
	else if (index == 4){
		ide = "total_d";
	}
	if (index == 4){
		i = "dependent_factor";
	}
	var score = parseFloat(id.value);
	if (id.checked == true) {
	  	var current_score = window.localStorage['total'];
	   	var procedure_score = window.localStorage['procedure_score'];
	   	if (getCurrentScore(i)){
	   		window.localStorage.setItem(id.name,true);
	        update_total(score,ide);
	   	}
	} else {
	   	window.localStorage.setItem(id.name,false);
	    update_total(-score,ide);
	}
}	

function update_total(x,ide){
	var score;
	if (ide == "total_d"){
		score = window.localStorage['dependent_score'];
	}
	else{
		score = window.localStorage['independent_score'];
	}
	var current_score = window.localStorage['total'];
	score = x + parseFloat(score);
	if (ide == "total_d"){
		window.localStorage['dependent_score'] = score;
	}
	else{
		window.localStorage['independent_score'] = score;
	}
	var total = x + parseFloat(current_score);
	window.localStorage['total'] = total;
	update_total_score(ide);
}

function getCurrentScore(ide){
	var score;
	if (ide == "dependent_factor"){
		score = window.localStorage['dependent_score'];
	}
	else{
		score = window.localStorage['independent_score'];
	}
	if (score < 5){
		return true;
	}
	return false;
}

