
function create_checkboxes(id,ide){
    for (var x = 0; x < factors.length; x++){
        if (factors[x] == id){
            index = x;
        }
    }
    var factor = factors[index];
    for (var i = 0; i < factor.length; i++) {
        var ul = document.createElement('ul');
        ul.className = "list";
        var li = document.createElement('li');
        li.className = "item item-checkbox";
        li.appendChild(document.createTextNode(factor[i].text));
        var label = document.createElement('label');
        label.className = "checkbox";
        var input = document.createElement('input');
        input.type = "checkbox";
        input.id = factor[i].text;
        input.name = factor[i].text;
        input.value = factor[i].score;
        input.onclick = function(event) {
            update_score(document.getElementById(event.target.id),index);
        }
        label.appendChild(input);
        li.appendChild(label);
        ul.appendChild(li);
        document.getElementById(ide).appendChild(li);
    }
}
