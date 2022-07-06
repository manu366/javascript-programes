var inhert_class=require("./inheritence")
class other  {
    constructor(e){
        // super(a,b,c,d,)
        this.a=inhert_class.a
        this.b=inhert_class.b
        this.c=inhert_class.c
        this.d=inhert_class.d
        this.e=e
    }
}
var nw=new other(50)
// console.log(nw.e);
// inhert_class.b
nw.e