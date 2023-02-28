import React,{ useState } from 'react'
import './food.css'

function Food(props){
  const {header,subHeader,imgSrc,infoBody} = props;
  const [counter,setCounter] = useState('MIN');
  const increase = () =>{
    if(counter === 'MIN'){
        setCounter(1);
    }
    else if(counter === 'MAX'){
        alert('Cannot Vote more');
    }
    else if(counter === 9){
        setCounter('MAX');
    }
    else{
        setCounter(counter+1);
    }
  }
  const decrease = () =>{
    if(counter === 'MIN'){
        alert('Cannot unvote');
    }
    else if(counter === 'MAX'){
        setCounter(9);
    }
    else if(counter === 1){
        setCounter('MIN');
    }
    else{
        setCounter(counter-1);
    }
  }
  return (
    <div className='flexBox'>
        <div className="Food">
            <div className='infoAndPhoto'>
                <div className='info'>
                    <h2>{header}</h2>
                    <h4>{subHeader}</h4>
                    <p>{infoBody}</p>
                </div>
                <img src={imgSrc} alt="..."></img>
            </div>
            <div className='groupButton'>
                <button onClick={increase}>Click to Vote</button>
                <div className='score'>
                    <p className='scoreText'>{counter}</p>
                </div>
                <button onClick={decrease}>Click to Unvote</button>
            </div>
        </div>
    </div>
  )
}

export default Food