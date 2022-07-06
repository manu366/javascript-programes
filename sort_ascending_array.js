var arr=[20,30,10,50,40]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i]<arr[j]) {
            var temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}