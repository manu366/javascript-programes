var arr= [30,10,40,50,20]
var fmax=arr[0]
var smax=arr[0];
for (let i = 0; i < arr.length; i++) {
    if (fmax<arr[i]) {
        smax=fmax;
        fmax=arr[i];
    }else if (smax<arr[i]) {
        smax=arr[i];
    }
}console.log(fmax+" "+smax);