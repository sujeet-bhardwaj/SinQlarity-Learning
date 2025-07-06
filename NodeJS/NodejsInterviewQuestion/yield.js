//  yield keyword used to pause and resume the generatoe function 

function* getnum(index){
    while(index<5){
        yield index;
        index++;
    }

}

let it=getnum(0);
console.log(it)
console.log(it.next());
// console.log(it.next().value)
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next().done);

