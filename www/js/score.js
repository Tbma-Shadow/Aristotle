function store_score(){
	store_state();
	var current_score = document.getElementsByName("total_main")[0].placeholder;
	window.localStorage['total'] = current_score;
}

function store_state(){
	window.localStorage['procedure_text'] = document.getElementsByName("name")[0].placeholder;
	window.localStorage['procedure_score'] = document.getElementsByName("b_score")[0].placeholder;
	window.localStorage['total'] = document.getElementsByName("total_main")[0].placeholder;
}

function get_current_state(){
	var x = window.localStorage['procedure_text'];
	if (x != null){
	    document.getElementsByName("b_score")[0].placeholder = window.localStorage['procedure_score'];
		document.getElementsByName("name")[0].placeholder = window.localStorage['procedure_text'];
		document.getElementsByName("total_main")[0].placeholder = window.localStorage['total'];
	}
	  window.localStorage['procedure_score']=document.getElementsByName("b_score")[0].placeholder;
	 window.localStorage['procedure_text']= document.getElementsByName("name")[0].placeholder ;
	 window.localStorage['total']=document.getElementsByName("total_main")[0].placeholder ;
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


