interface obj {
    name:string;
    gender?:string
    id:number;

    print():void;
}

class A implements obj{
    // name="hi"
    // id=1
    name: string;
    id: number;
    constructor(){
        this.name = "hi"
        this.id=101
    }

    print():void {

    }
}

// function getDetails(myobj:obj){
//      console.log(myobj)
//      myobj.print()
// }

// getDetails({name:"S",id:1,print:()=>{console.log("hello")}})