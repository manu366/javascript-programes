var arr=[20,10,30,50,40]
for (let i= 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]>arr[j]) {
            var temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr[0]);