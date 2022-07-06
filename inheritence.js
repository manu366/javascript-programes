class inner{
    constructor(a,b,c,){
        this.a=a
        this.b=b
        this.c=c
    }
    display(){
        console.log(this.c);
    }
}
const i=new inner(10,20,30)
// console.log(i.a);


class outer extends inner{
    constructor(a,b,c,d){
        super(a,b,c)
        this.d=d
        
    }
    
}
var bd=new outer(10,20,30,40)
console.log(bd.b);
console.log(bd.d);
bd.display();
module.exports=bd
