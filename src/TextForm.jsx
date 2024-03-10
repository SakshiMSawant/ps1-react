import React, { useState } from 'react';

function TextForm() {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
    };

    const handleClearClick = () => {
        setText("");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="container my-3">
            <h2>Enter your text below</h2>
            <textarea className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mt-3 mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-danger mt-3 mx-1" onClick={handleClearClick}>Clear Text</button>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    );
}

export default TextForm;
