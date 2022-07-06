var arr= [30,10,40,50,20]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i]>arr[j]) {
            var temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}console.log(arr[0]+arr[1]+arr[2]);