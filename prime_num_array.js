var arr=[1,2,3,4,5,6,7,8,9,20,41,]
for (let i = 0; i < arr.length; i++) {
    var no=arr[i]
    var flag=true
    for (let j = 2; j < no; j++) {
        if (no%j==0) {
            flag=false
        }
    }
    if (flag) {
        console.log(no);
    }
}