//
var d= new Date();
var current_day=d.getDay();
var day_name = '';
switch (current_day) {
    case 0:
        day_name = "Sunday";
        break;
    case 1:
        day_name = "Monday";
        break;
    case 2:
        day_name = "Tuesday";
        break;
    case 3:
        day_name = "Wednesday";
        break;
    case 4:
        day_name = "Thursday";
        break;
    case 5:
        day_name = "Friday";
        break;
    case 6:
        day_name = "Friday";
    }
console.log("Today is "+ day_name)

var time= d.getHours();
if(time>=0&&time<12)
time= time +" AM";
else
time=time+" PM";
console.log("Current time is: "+ time+" : "+d.getMinutes()+" : "+d.getSeconds());

function myFunction() {
   
    var copyText = document.getElementById("myInput");
  
    
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  function ReadCookie()
            {
               var allcookies = document.cookie;
               document.write ("All Cookies : " + allcookies );

               // Get all the cookies pairs in an array
               cookiearray = allcookies.split(';');

               // Now take key value pair out of this array
               for(var i=0; i<cookiearray.length; i++){
                  name = cookiearray[i].split('=')[0];
                  value = cookiearray[i].split('=')[1];
                  document.write ("Key is : " + name + " and Value is : " + value);
               }
            }

//

const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"Adam","age":20}'));
  console.log(isValidJSON('{"name":"Adam",age:"20"}'));
  console.log(isValidJSON(null));

const fs = require('fs')
const user = {
    id: 1,
    name: 'Dương Duy Trường',
    age: 20
}
const data = JSON.stringify(user)
fs.writeFile('user.json', data, err => {
    if (err) {
        throw err;
    }
    console.log('JSON data is saved.')
})
fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    const user = JSON.parse(data.toString())
    console.log(user);
})