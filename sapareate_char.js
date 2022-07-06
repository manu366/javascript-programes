var s="ma(*@#$88775nu"
    var al=""
    var num=""
    var sp=""
for (let i = 0; i < s.length; i++) {
    var ch=s.charAt(i)
    if (ch>='a'&&ch<='z'||ch>='A'&&ch<='Z') {
        al=al+ch
    }else if (ch>='0'&&ch<='9') {
        num=num+ch
    }else{
        sp=sp+ch
    }
}console.log(al);
console.log(num);
console.log(sp);