var s="my name is manohara is my"
var st=s.split(" ")
for (let i = 0; i < st.length; i++) {
    var count=0
    for (let j = 0; j < st.length; j++) {
        if (st[i]==st[j]) {
            count++
        }
    }
    if (count==1) {
        console.log(st[i]);
    }
    
}