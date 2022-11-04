import React, {useState} from 'react';

const Counter = (props) => {
    console.log(props)

    //let countState = 77;
    const [countState, setCountState] = useState(77);

    function incCount(){
        setCountState(countState + props.incBy);
    }
    const countStyle = {
        fontSize: "1.5em"
    }

    return (
        <div>
            <div id='c' style={countStyle}>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}
export default Counter;