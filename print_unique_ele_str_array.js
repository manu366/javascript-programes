var arr=["hi","hello","my","rama","son"]
for (let i = 0; i < arr.length; i++) {
    var count=1
    for (let j = 0; j < arr.length; j++) {
        if (arr[i]<arr[j]) {
            count++
        }   
    }
    if (count=1) {
        console.log(arr[i]+"==>"+count);
    }
}