var arr=[20,10,30,50,30,]
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]==arr[j]) {
            console.log(arr[i]);
        }
    }
}