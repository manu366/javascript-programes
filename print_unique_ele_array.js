var arr=[20,10,30,50,30,]
for (let i = 0; i < arr.length; i++) {
    var count=1
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]==arr[j]) {
            count++
        }
    }
    if (count==1) {
        console.log(arr[i ]);
    }
}