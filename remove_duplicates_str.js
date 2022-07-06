var s="manohara"
for (let i = 0; i < s.length; i++) {
    var count=0
    var ch=s.charAt(i)
    for (let j = 0; j < s.length; j++) {
        if (ch==s.charAt(j)) {
            count++
        }
    }
    if (count==1) {
        console.log(ch);
    }
}