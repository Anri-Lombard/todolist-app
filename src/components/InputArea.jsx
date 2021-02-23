import React, { useState } from 'react';

function InputArea(props){
    const [inputItem, setInputItem] = useState("");

    function saveItem(event) {
        const value = event.target.value;
        setInputItem((value));
    }

    return (
        <div className="form">
            <input onChange={saveItem} type="text" value={inputItem} />
            <button 
                onClick={() => {
                    props.onAdd(inputItem);

                    setInputItem("");
                }}
            >
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;