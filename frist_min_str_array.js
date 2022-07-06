var s="my name is manohara"
var st=s.split(" ")
for (let i = 0; i < st.length; i++) {
    for (let j = 0; j < st.length; j++) {
        if (st[i].length<st[j].length) {
            var temp=st[i]
            st[i]=st[j]
            st[j]=temp
        }
    }
}console.log(st[0]);