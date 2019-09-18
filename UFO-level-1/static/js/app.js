// from data.js
var tableData = data;

// YOUR CODE HERE!
//hook into the button
d3.selectAll("#filter-btn").on("click", handleClick);
d3.selectAll("#reset-btn").on("click", resetClick);

// create the func to build the table
function buildtable(somedata){
    let tbody = d3.select("tbody");
    tbody.html("");

    somedata.forEach(row => {
        //console.log(row);
        let tr = tbody.append("tr");

        Object.values(row).forEach(cell => {
            let c = tr.append("td");
            c.text(cell);
        });
    });

}

//Function to filter data by date
function handleClick(){
    var date =d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter( element => element.datetime === date);

    }

    buildtable(filteredData);
}


//Function to reset data
function resetClick(){
    var date =d3.select("#datetime").property("value");
    let filteredData = tableData;

//    if (date) {
//        filteredData = filteredData.filter( element => element.datetime === date);

//    }

    buildtable(filteredData);
}

//call the build table func with the non-filtered data
buildtable(data);
