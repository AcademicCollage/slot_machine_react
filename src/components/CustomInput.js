import React from 'react';

const CustomInput = (props) => {
    return (
        <div>
            <input
                onChange={props.onChange}
                min="2"
                max="100"
                placeholder={props.placeholder}
                type={props.type}/>
        </div>
    );
};

export default CustomInput;
