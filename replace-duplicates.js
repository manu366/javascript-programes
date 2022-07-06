var s="manoharah"
var repl=""
var rep=""
for (var i = 0; i < s.length; i++) {
    var count=1
    var ch=s.charAt(i)
    for (let j = 0; j < s.length; j++) {
        if (ch==s.charAt(j)) {
            count++
        }
    }
//     if (count>1) {
//         console.log(s.replaceAll(ch,"@"));
//     } 
}
    if (count>1) {
        console.log(s.replaceAll(ch,"@"));
    }