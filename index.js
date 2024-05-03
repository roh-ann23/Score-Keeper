
let score = 0;
let wicket = 0;
let ballwiseres = [];
let hit = 0;
let inputRef = React.createRef();

function addScore(num){
    // if(wicket < 10){
    //  score += num;
    //  ballwiseres.push(num); 

    hit = num;
     reactElement.render(< App />)
    // } 
}
function addWicket(){
    // if(wicket < 10){
    //    wicket += 1;
    //    ballwiseres.push('w'); 
        
        hit = 'w';
       reactElement.render(< App />)
    // }
    
}

const ShowRuns = () =>(
    <>
    {
        ballwiseres.map((runs,index)=>(
            <>
            {index % 6 === 0 ? <br/> : null}
            <span key={index}>{runs === 0 ? <strong>.</strong>: runs}</span> &emsp; 
            {/* here we use conditional rendering means if runs === 0 then print '.'(dot) otherwise print run */}
            </>
        ))
    }
    </>
)
function AddButtons(){
    return(
        <div className="btn">
        <button onClick={()=> addScore(0)}>0</button>
        <button onClick={()=> addScore(1)}>1</button>
        <button onClick={()=> addScore(2)}>2</button>
        <button onClick={()=> addScore(3)}>3</button>
        <button onClick={()=> addScore(4)}>4</button>
        <button onClick={()=> addScore(5)}>5</button>
        <button onClick={()=> addScore(6)}>6</button>
        <button onClick={()=> addWicket()}>Wicket</button>
        </div>
    )
}
function handleSubmit(e){
    e.preventDefault();

    if(hit==='w'){
        wicket += 1;
        // console.log(inputRef.current.value);
    }else{
        score += hit;
    }
    ballwiseres.unshift(
        <span>
         {`${hit}, ${inputRef.current.value}`}
        </span>
    )
    reactElement.render(<App/>)

    hit = 0;
    inputRef.current.value = '';
}

const ShowForms = () =>(
    <form className="comment-form" onSubmit={handleSubmit}>
        <input value={hit}/>
        <input ref={inputRef} placeholder = 'Add a commenatory!' />
        <button>Submit</button>
    </form>
)

function App(){
    
    return (
        <>
            <h1>Score Keeper</h1>
            <h2>Score: {score}/{wicket} </h2>
            < AddButtons />
            <br/> 
            {/* < ShowRuns/> */}
            < ShowForms />
            <hr/>

            {ballwiseres.map((ball,index)=>(
                 <p key={index} className="ball">{ball}</p>
            ))}
        </>
    )
}

const reactElement = ReactDOM.createRoot(document.getElementById('root'));
reactElement.render(< App />)
