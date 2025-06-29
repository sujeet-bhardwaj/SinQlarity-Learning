 let arr=[]
 fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    for(let i=0;i<5;i++){
        console.log(data[i].id)
        arr.push(data[i].title);
    }
    console.log(arr)
  })
  .catch(error => {
    console.error("Error:", error);
  });

  
