import React ,{useState}from 'react'

const Health1 = () => {

    function weightfun(e){
        setWeight(e.target.value);
        setBmi((weight/(height*height))*10000)

    }

    function heightfun(e){
        setHeight(e.target.value);
        setBmi((weight/(height*height))*10000)
    }
    const[weight,setWeight] = useState(0)
    const[height,setHeight] = useState(0)

    //  weight/(height*height)

    const[bmi,setBmi] = useState(0)

    
  return (
    <div>
        <div className='divcalc'>
            <br></br>
            <div className='inputrng'><br></br>
            <input type="range" min="0" max="130"  onChange={(e)=>{weightfun(e)}}/>{weight} kg weight 
            <br></br>
            <input type="range" min="0" max="230" onChange={(e)=>{heightfun(e)}}/> {height} cm height

            <h1 className='bmih1'>BMI :              {bmi}</h1>
            </div>
           
        </div>
    </div>
  )
}

export default Health1