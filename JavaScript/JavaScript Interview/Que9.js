function createcounter(count){
  return function (){
     return count;
  }


}

const counter=createcounter(1)
console.log(counter)

