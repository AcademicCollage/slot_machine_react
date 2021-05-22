import React  from 'react';

const Slot=(props)=>{


    return (
        <div  style={style.container}>
            <p>{props.item.type}</p>
        </div>
    );
}


const style={
    container:{
        height:"5vh",
        width:'5vh',

        borderWidth:"10px",
        borderColor:'black',
        backgroundColor:'red',
        border: '2px solid red',
        margin:'5px'
    }
}

export default Slot;
