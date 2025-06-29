  Array.prototype.last=function (){
    if(this.length){
        return this.length-1;
    }
    else{
        return -1
    }
  } 
  const arr=[12,34,56];
  console.log(arr[arr.last()]);