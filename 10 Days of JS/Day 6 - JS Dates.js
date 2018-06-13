// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    var date1 = new Date(dateString);
    let n =  date1.getDay();
    switch(n) {
        case 0 : dayName = "Sunday"; break;
        case 1 : dayName = "Monday"; break;
        case 2 : dayName = "Tuesday"; break;
        case 3 : dayName = "Wednesday"; break;
        case 4 : dayName = "Thursday"; break;
        case 5 : dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
    }
    return dayName;
}

function main() {  
    const date = '10/11/2009';
    console.log(getDayName(date));
    }
}