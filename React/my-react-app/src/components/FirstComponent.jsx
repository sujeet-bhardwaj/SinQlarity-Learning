 
  function FirstComponent(props){
        return (
        <>
        <h1>{props.value} component </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ipsa.</p>
        <button onClick={props.update}>Close me </button>
        <h3>{props.Intialvalue}</h3>
        <button onClick={props.Increment}>Increment</button>
        </>
    )    
    }
export default   FirstComponent;