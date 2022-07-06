var s="india"
var st=s.split("")
var rev=""
for (let i = 0; i < st.length; i++) {
    rev=st[i]+rev
}
console.log(rev);