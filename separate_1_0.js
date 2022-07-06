var num=[1,0,1,0,1,0]
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
        if (num[i]>num[j]) {
            var temp=num[i]
            num[i]=num[j]
            num[j]=temp
        }
    }
}console.log(num);