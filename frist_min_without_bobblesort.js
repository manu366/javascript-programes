var arr=[20,10,30,50,40]
var min=arr[0]
for (let i = 0; i < arr.length; i++) {
    if (min>arr[i]) {
        min=arr[i];
    }
}console.log(min);