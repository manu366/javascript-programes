var arr= [30,10,40,50,20]
var fmin=arr[0]
var smin=arr[0];
for (let i = 0; i < arr.length; i++) {
    if (fmin>arr[i]) {
        smin=fmin;
        fmin=arr[i];
    }else if (smin>arr[i]) {
        smin=arr[i];
    }
}console.log(fmin+" "+smin);