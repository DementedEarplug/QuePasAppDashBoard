/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart','bar']});

// Set a callback to run when the Google Visualization API is loaded.

//////////////////////////////////////////////////
// Draw charts for active users per day         //
//////////////////////////////////////////////////
google.charts.setOnLoadCallback(drawActiveUsersChart);

function reformatActiveUserData(jsonData){
    var temp= jsonData.ActiveUsers ;
    var result = [];
    var i;
    var s;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        s = row.postdate;
        s = s.replace(s.substring(16),"");
        dataElement.push(s);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawActiveUsersChart() 
{
    var jsonData = $.ajax({
        url: "http://127.0.0.1:8000/QuePasApp/DashBoard/ActiveUsersPerDay",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Active users');
    data.addRows(reformatActiveUserData(JSON.parse(jsonData)));

    var options = {
        title: 'Active Users Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Days'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('ActiveUsers'));

    chart.draw(data, options);

}

//////////////////////////////////////////////////
// Draw charts for number of messages per day   //
//////////////////////////////////////////////////

google.charts.setOnLoadCallback(drawMsgCountChart);

function reformatMsgCountData(jsonData){
    var temp= jsonData.MessagesPerDay;
    var result = [];
    var i;
    var s;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        s = row.postdate;
        s = s.replace(s.substring(16),"");
        dataElement.push(s);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawMsgCountChart() 
{
    var jsonData = $.ajax({
        url: "http://127.0.0.1:8000/QuePasApp/DashBoard/messeagesPerDay",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Messages');
    data.addRows(reformatMsgCountData(JSON.parse(jsonData)));

    var options = {
        title: 'Messages Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Days'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('MsgsPerDay'));

    chart.draw(data, options);

}

//////////////////////////////////////////////////
// Draw charts for number of replies per day    //
//////////////////////////////////////////////////

google.charts.setOnLoadCallback(drawReplyCountChart); //change this

function reformatReplyCountData(jsonData){ //change this
    var temp= jsonData.RepliesPerDay;   //change this
    var result = [];
    var i;
    var s;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        s = row.postdate;
        s = s.replace(s.substring(16),"");
        dataElement.push(s);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawReplyCountChart() //change this
{
    var jsonData = $.ajax({
        url: "http://127.0.0.1:8000/QuePasApp/DashBoard/repliesPerDay", //change this
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Replies');   //Change this and below
    data.addRows(reformatReplyCountData(JSON.parse(jsonData)));

    var options = {
        title: 'Replies Per Day',   //change this
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Days'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('RepliesPerDay')); //change this

    chart.draw(data, options);

}

//////////////////////////////////////////////////
// Draw charts for number of likes per day      //
//////////////////////////////////////////////////

google.charts.setOnLoadCallback(drawLikesCountChart); //change this

function reformatLikeCountData(jsonData){ //change this
    var temp= jsonData.LikesPerDay;   //change this
    var result = [];
    var i;
    var s;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        s = row.postdate;
        s = s.replace(s.substring(16),"");
        dataElement.push(s);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawLikesCountChart() //change this
{
    var jsonData = $.ajax({
        url: "http://127.0.0.1:8000/QuePasApp/DashBoard/likesPerDay", //change this
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Likes');   //Change this and below
    data.addRows(reformatLikeCountData(JSON.parse(jsonData)));

    var options = {
        title: 'Likes Per Day',   //change this
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Days'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('LikesPerDay')); //change this

    chart.draw(data, options);

}

//////////////////////////////////////////////////
// Draw charts for number of dislikes per day      //
//////////////////////////////////////////////////

google.charts.setOnLoadCallback(drawDislikesCountChart); //change this

function reformatDislikeCountData(jsonData){ //change this
    var temp= jsonData.DislikesPerDay;   //change this
    var result = [];
    var i;
    var s;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        s = row.postdate;
        s = s.replace(s.substring(16),"");
        dataElement.push(s);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawDislikesCountChart() //change this
{
    var jsonData = $.ajax({
        url: "http://127.0.0.1:8000/QuePasApp/DashBoard/dislikesPerDay", //change this
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Dislikes');   //Change this and below
    data.addRows(reformatDislikeCountData(JSON.parse(jsonData)));

    var options = {
        title: 'Dislikes Per Day',   //change this
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Days'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('DislikesPerDay')); //change this

    chart.draw(data, options);

}