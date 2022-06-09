import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../redux/textSlice';
import "../App.css"

const Textarea = (props) => {
    const [text, updateText] = useState("");
    const dispatch = useDispatch();
    const handleClick = () => {
        if (text.length > 0) {
            dispatch(add(text))
            updateText("");
        } else {
            return null
        }
    }
    return (
        <div className='d-flex justify-content-center' style={{ margin: 20 }} >
            <div >
                <input className="form-control" value={text} onChange={(e) => updateText(e.target.value)} placeholder="Enter-Todo"></input>
            </div>
            <div>
                <button className="btn btn-success" onClick={handleClick}>Save</button>
            </div>

        </div>
    )
}

export default Textarea
