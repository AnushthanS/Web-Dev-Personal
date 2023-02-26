//Question 1
let func1 = () => {
    alert("Succesfully submitted");
}

//Question 2
let order = () => {
    let input = document.getElementById('input-values').value;
    let values = input.split(',');

    let order_type = document.getElementById('order-select').value;
    if(order_type == "") alert("Select the sorting order");

    let input_type = document.getElementById('input-type').value;
    if(input_type == "") alert("Select an input type");

    if(input_type == 1){
        for(let i = 0; i < values.length; i++){
            if(values[i]=="") continue;
            values[i] = parseInt(values[i]);
        }

        let ascNum = (a, b) => {
            return a - b;
        }
        let descNum = (a, b) => {
            return b - a;
        }

        values.sort(order_type == 1 ? ascNum : descNum);
        document.getElementById('sorted-out').innerHTML = values;

    } else if(input_type == 2) {
        values.sort((a, b) => {
            a.localeCompare(b);
        });
        if(order_type == 2) values.reverse();
        document.getElementById('sorted-out').innerHTML = values;
    } else {
        values.sort();
        if(order_type == 2) values.reverse();
        document.getElementById('sorted-out').innerHTML = values;
    }
}


//question 3
const V = 5;

let prim = () => {
    let input = document.getElementById('graph-input-1').value;
    let values1 = input.split(',');

    input = document.getElementById('graph-input-2').value;
    let values2 = input.split(',');

    input = document.getElementById('graph-input-2').value;
    let values3 = input.split(',');

    input = document.getElementById('graph-input-2').value;
    let values4 = input.split(',');

    input = document.getElementById('graph-input-2').value;
    let values5 = input.split(',');

    let graph = [values1,values2, values3, values4, values5];
    primMST(graph);
}

let minKey = (key, mstSet) => {
    let min = Number.MAX_VALUE, min_index;
 
    for (let v = 0; v < V; v++)
        if (mstSet[v] == false && key[v] < min)
            min = key[v], min_index = v;
 
    return min_index;
}

let printMST = (parent, graph) =>{

    let out = document.getElementById('prim-out');

    out.innerHTML = "Edge       Weight" + "<br>";
    for (let i = 1; i < V; i++){
        out.innerHTML += (parent[i] + "   -  " + i + "     " + graph[i][parent[i]] + "<br>");
    }
        
}

let primMST = (graph) =>{

    let parent = [];
    let key = [];
    let mstSet = [];
    for (let i = 0; i < V; i++){
        key[i] = Number.MAX_VALUE, mstSet[i] = false;
    }
    key[0] = 0;
    parent[0] = -1;
 
    for (let count = 0; count < V - 1; count++) {

        let u = minKey(key, mstSet);
        mstSet[u] = true;
        for (let v = 0; v < V; v++){
            if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v]){
                parent[v] = u, key[v] = graph[u][v];
            }
        }
    }
    printMST(parent, graph);
}