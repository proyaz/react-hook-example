import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';



const buttons = (props) => {
    console.log("button props ",props);
    return (
        <div>
            <ButtonToolbar>
                <Button onClick={props.sendFun} className={props.color}>{props.color}</Button>
            </ButtonToolbar>
            
                {/* <button className={props.color}>{props.color}</button> */}
           
            <p>{props.children}</p>
        </div>
    )
}

export default buttons;