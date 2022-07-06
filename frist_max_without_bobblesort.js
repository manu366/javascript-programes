var arr=[20,10,30,50,40]
var max=arr[0]
for (let i = 0; i < arr.length; i++) {
    if (max<arr[i]) {
        max=arr[i];
    }
}console.log(max);