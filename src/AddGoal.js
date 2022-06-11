import React , {useState , useEffect} from "react";


import './Style/AddGoal.css'

const AddGoal = (props) => {

const [input , setInput] = useState('')
const [Valid , setValid] = useState(true)
const [length , setLength] = useState()

const inputHandler = (e) => {
    
    e.preventDefault()
    setInput(e.target.value)
}

useEffect(() => {
    setLength(
        input.length > 5
    )
}, [input])

const SubmitHandler = (e) => {
    e.target.reset();
    e.preventDefault()

    const inputList = {
            input: input,
            value: Math.random()
        }

        
let a = inputList.input.trim().toString()


if(a.length == 0) {
    setValid(false)
} else {
    props.GetInput(inputList)
    setInput("")
}

}

    return(
        <>
        <div className="All">
        <div className="AddGoal-Bar">


        <form onSubmit={SubmitHandler} className="AddGoal-form">
                <h3>Add Goal</h3>
                <input style={{borderColor: !Valid ? 'red' : 'black', 
                              boxShadow: !Valid ? ' 0 0 12px #f95959' : '0 0 0'}} onChange={inputHandler} className="AddGoal-input" type={"text"}></input>
                <button onClick={() => setValid(true)} type="submit" className="AddGoal-button">Add</button>
                <p className={Valid ? "DisplayNone" : "Error"}>Enter Goal!</p>
                {
                    length == false ?(
                        <p>Enter 5 character goal</p>
                    ) : (
                        <></>
                    )
                }
            </form>


            {/* <form onSubmit={SubmitHandler} className="AddGoal-form">
                <h3>Add Goal</h3>
                <input style={{borderColor: !Valid ? 'red' : 'black', 
                              boxShadow: !Valid ? ' 0 0 12px #f95959' : '0 0 0'}} onChange={inputHandler} className="AddGoal-input" type={"text"}></input>
                <button onClick={() => setValid(true)} type="submit" className="AddGoal-button">Add</button>
                {
                    Valid == false ?(
                        <p className="Error">Enter Goal!</p>
                    ) : (
                        <p></p>
                    )
                }
            </form> */}


        {/* {
            Valid == true ?(
            <form onSubmit={SubmitHandler} className="AddGoal-form">
                <h3>Add Goal</h3>
                <input onChange={inputHandler} className="AddGoal-input" type={"text"}></input>
                <button type="submit" className="AddGoal-button">Add</button>
            </form>
            ) : (
                <>
                
            <form onSubmit={SubmitHandler} className="AddGoal-form">
                <h3>Add Goal</h3>
                <input onChange={inputHandler} className="AddGoal-input" type={"text"}></input>
                <button onClick={() => setValid(true)} type="submit" className="AddGoal-button">Add</button>
            </form>


            <p className="Error" Style={{}}>Enter Goal!</p>
                </>
            )
        } */}
            
        </div>
        </div>
      </>
    )
}

export default AddGoal;