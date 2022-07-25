class BEM{
    
    //propiedades
    block: string;
    element: string[];
    modifier: string[];

    //constructor, inicializador
    constructor(b:string, aE:string[], aM:string[]){
        //assing the values to the properties
        this.block = b;
        this.element = aE;
        this.modifier = aM;
    } //whenever we create an BEM object its gonna take those properties and values

    //method of the object
    checkEmptyBlock(b:string) {
       
        if (b.length === 0) 
          { return "empty"; } 
        else
          { return "full"; }
      }

      //method of the object
      checkEmptyArray(array:string[]) {
        if (array.length === 0) {
          return "empty";
        } else {
          //si es diferente a 0 checa si hay ""
          for (let x of array) {
          //recorre cada elemento del array para ver si hay un ""
           if (x === "") {
              return "empty";
            }
          else {
              return "full";
              //console.log("lleno: "+ x); //devuelve el primer elemento si no es, debe tener una palabra nomas?
            }
          }
        }
      }

      //method of the object
     jointBEM = (b:string, aE:string[], aM:string[]) => {
        if (this.checkEmptyBlock(b) === "full") {
            //"block":
            if ( this.checkEmptyArray(aE) === "empty" && this.checkEmptyArray(aM) === "empty" ) {
              const res = b;
              return console.log(res);
            } 
            //"block__element":
            else if ( this.checkEmptyArray(aE) === "full" && this.checkEmptyArray(aM) === "empty" ) {
              const res = b + "__" + aE; 
              return console.log(res);
            } 
            //"block--modifier":
            else if( this.checkEmptyArray(aE) === "empty" && this.checkEmptyArray(aM) === "full" ) {
                const res = b + "--" + aM; 
                return console.log(res);
            } 
            //block__element--modifier:
            else if( this.checkEmptyArray(aE) === "full" && this.checkEmptyArray(aM) === "full" ) {
                const res = b + "__" + aE + "--" + aM; 
                return console.log(res);
            }
          }
          else{
            console.log("There's no block, end of program.")
          }
     }; 

}//end of class BEM

    //instanciar clase
    const bem1 = new BEM("boton", ["precio"], ["rojo"]);
   
    //invocar metodo jointBEM
    bem1.jointBEM("boton", ["price"], ["red"]);