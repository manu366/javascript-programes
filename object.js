var info=[
    {fname:"abc",adress:"india"},
    {fname:"def",adress:"USA"},
    {fname:"ghi",adress:"russia"},
    {fname:"jkl",adress:"europe"},
    {fname:"mno",adress:"india"}
]
var q=""
var w=[]
for (let i = 0; i < info.length; i++) {
    q=info[i]
    w.push(q.adress)
}
console.log(w);
for (let i = 0; i < w.length; i++) {
    var count=1
    for (let j = 1; j < w.length; j++) {
        if (w[i]==w[j]) {
            count++
        }
    }
    if(w[i]=="india"){
    console.log(w[i]+"==>"+count);
}
}