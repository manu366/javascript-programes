class encap{
    #data="manohra"
    get name(){
        return this.#data
    }
    set setname(data){
        this.#data=data
    }
}
var en=new encap()
console.log(en.name);
en.setname="arjun"
console.log(en.name);