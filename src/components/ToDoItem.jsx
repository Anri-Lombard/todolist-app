import React  from "react";

// This allows the div to only be trigerred once the item has been clicked.
function TodoItem(props) {
    return (
        <div onClick={() => {props.onChecked(props.id);}}>
            <li>{props.text}</li>
        </div>
    )
}

export default TodoItem;