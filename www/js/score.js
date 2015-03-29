function store_score(){
	store_state();
	var current_score = document.getElementById("total_main").innerHTML;
	window.localStorage['total'] = current_score;
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
	var ide;
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
    var score = parseFloat(id.value);
    if (id.checked == true) {
        update_total(score,ide);
    } else {
        update_total(-score,ide);
    }
}

function update_total(x,ide){
	var current_score = window.localStorage['total'];
	var total = x + parseFloat(current_score);
	window.localStorage['total'] = total;
	update_total_score(ide);
}


