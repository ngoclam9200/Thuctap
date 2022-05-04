

var array=[]
var arrayMonth=[]
for(let i=0 ; i<=11; i++)
{
  


var dt = new Date(); //get current day
var month = dt.getMonth()-i;
var year = dt.getFullYear();
var daysInMonth = new Date(year, month, 0).getDate(); // day in month 
var endDay=daysInMonth; 
var startDay=1
if (month==0) month=12
if (month<0) month=month +12
arrayMonth.push(month)
var obj={"startDay": startDay , "endDay":endDay } //obj start day and end day
array.push(obj)
month=0
year=0
}
console.log("12 tháng gần nhất:")
console.log(arrayMonth)
console.log("Mảng object start day và end day:")
console.log(array)
for(let i=0 ; i<=11 ;i++)
console.log(array[i])


