function create_dependent_factor_checkboxes(id){
    populateArray();
    create_checkboxes(dependent_factor,id);
}

function get_factor_array(id){
    if (id == dependent_factor){
        return dependent_factor;
    }
    for (var x = 0; x < factors.length; x++){
        if (factors[x] == id){
            index = x;
        }
    }     
    var factor = factors[index];
    return factor;
}

function get_index(id){
    for (var x = 0; x < factors.length; x++){
        if (factors[x] == id){
            return x;
        }
    }
    return 4;  
}

function create_checkboxes(id,ide){
    var factor = get_factor_array(id);
    var index = get_index(id);
    for (var i = 0; i < factor.length; i++) {
        var ul = document.createElement('ul');
        ul.className = "list";
        var li = document.createElement('li');
        li.className = "item item-checkbox checkbox-energized";
        li.appendChild(document.createTextNode(factor[i].text));
        var label = document.createElement('label');
        label.className = "checkbox";
        var input = document.createElement('input');
        input.type = "checkbox";
        input.id = factor[i].text;
        input.name = factor[i].text;
        input.value = factor[i].score;
        var tick = window.localStorage.getItem(input.id);
        if (tick == "null"){
        }
        else if (tick == "false"){
            input.checked = false;
        }
        else if (tick == "true"){
            input.checked = true;
        }
        input.onclick = function(event) {
            var current_score = window.localStorage['total'];
            var procedure_score = window.localStorage['procedure_score'];
            var score = document.getElementById(event.target.id).value;
            if (score > 0 && score < 30){
                if (getCurrentScore(ide)){
                    update_score(document.getElementById(event.target.id),index);
                }
                else if (document.getElementById(event.target.id).checked == false){
                    update_score(document.getElementById(event.target.id),index);
                }   
                else{
                    if (ide == "dependent_factor"){
                        alert("Dependent Factors scores can only have the maximum score of 5");
                    }
                    else{
                        alert("Independent Factors scores can only have the maximum score of 5")
                    }
                    document.getElementById(event.target.id).checked = false;
                }
            }
            else{
                display_factors(document.getElementById(event.target.id),ide);
            }
        }
        label.appendChild(input);
        li.appendChild(label);
        ul.appendChild(li);
        document.getElementById(ide).appendChild(li);
    }
}
        
function display_factors(y,ide){
    var link = y.value;
    var procedure_id;
    for (var x = 0; x < link.length; x++){
        if (link[x] == '('){
            if (link[x+4] == ')'){
                //Two digit
                procedure_id = link[x+2] + link[x+3];
            }
            else if (link[x+5] == ')'){
                // Three digit
                procedure_id = link[x+2] + link[x+3] + link[x+4];
            }
        }
    }
    for (var i = 0; i < procedures.length; i++){
        if (procedures[i].number == procedure_id){
            temp_procedure = procedures[i].text;
        }
    }
    if (procedureHasFactors(temp_procedure)){
        var index = localStorage.getItem("index");
        index = parseInt(index);
        index = index + 1;
        localStorage.setItem("index",index);
        localStorage.setItem("procedure" + index,temp_procedure);
        window.localStorage['procedure_text'] = temp_procedure;
        location.reload();
    }
    else{
        alert("No Factors for this Selected Procedure");
        y.checked = false;
    }
}

