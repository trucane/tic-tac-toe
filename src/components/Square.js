import React, {useState} from 'react';
import {size} from '../helpers/mock';
import './square.css'


const Square = (props) =>{
   
    const [clicked, setClicked] = useState(false)

    const userAction = () => {
        setClicked(true)
        props.game(props.position)
    }

    const styles={
        square:{
            width:`${size}px`,
            height:`${size}px`,
        }
    }

    return(

    <div className="square" style={styles.square} onClick={!clicked ? userAction : null}>
        
    </div>

)
    }



export default Square;