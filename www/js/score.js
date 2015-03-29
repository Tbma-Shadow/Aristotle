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
	    document.getElementById("b_score").innerHTML = window.localStorage['procedure_score'];
		document.getElementById("name").innerHTML = window.localStorage['procedure_text'];
		document.getElementById("total_main").innerHTML = window.localStorage['total'];
	}
	  window.localStorage['procedure_score']= document.getElementById("b_score").innerHTML;
	 window.localStorage['procedure_text']= document.getElementById("name").innerHTML;
	 window.localStorage['total']= document.getElementById("total_main").innerHTML;
}

function update_total_score(id){
	var score = window.localStorage['total'];
	document.getElementsByName(id)[0].placeholder = score;
}

function update_score(id,index) {
	var ide;
	if (index == 0){
		ide = "general";
	}
	else if (index == 1){
		ide = "clinical";
	}
	else if (index == 2){
		ide = "extracardiac";
	}
	else if (index == 3){
		ide = "surgical";
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


