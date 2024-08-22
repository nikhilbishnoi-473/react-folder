import React, { useState } from 'react';

const UseStarteOne = () => {
    const [text, setText] = useState(" ");
    
   
    const handleUppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    };

    const handleLowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };


    const handleClearText = () => {
        setText(" ");
    };
    
    const handlecopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handlespace = ()=> {
        let newtext = text.split(/[ ] + /);
        setText(newtext.join(" "))
    }

    //------------------------------ textarea second------------>>>>>>>>><<<<<<<
    const [text_2, setText_2] = useState(" ");
    const btnChange = () => {
        let newt = text_2.toUpperCase();
        setText_2(newt);
    };

    const handleTextChange = (event) => {
        setText_2(event.target.value);
    };



    // --------------              ------darkmode------------------
    const [mystyle, setStyle] = useState({
        color: "white",
        backgroundColor: "black"
    });
    const [btntext, setBtnStyle] = useState("dark mode");

    const toggleStyle = () => {
        if (mystyle.color === 'white') {
            setStyle({
                color: "black",
                backgroundColor: "white"
            });
            setBtnStyle("light mode");
        } else {
            setStyle({
                color: "white",
                backgroundColor: "black"
            });
            setBtnStyle("dark mode");
        }
    };

    return (
        <div className='  min-vh-100' style={mystyle}>
            <div className='d-flex justify-content-end'>
                <button onClick={toggleStyle} className='btn btn-info'>{btntext}</button>
            </div>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <h1 className=' style={mystyle}'>useState Text Analyzer</h1>
                </div>
                <textarea style={{backgroundColor: mystyle === 'black' ? 'white' : 'dark'}}
                    className='form-control'
                    onChange={handleOnChange}
                    value={text}
                    id="mybox"
                    rows={2}
                ></textarea>
                <button className='btn btn-primary mt-3' style={mystyle} onClick={handleUppercase}>Convert to Uppercase</button>
                <button className='btn btn-success mt-3 ms-3' onClick={handleLowercase}>Convert to Lowercase</button>
                <button className='btn btn-primary mt-3 ms-3' style={mystyle} onClick={handleClearText}>Remove</button>
                <button className='btn btn-primary mt-3 ms-3' onClick={handlecopy}>copy</button>
                <button className='btn btn-success mt-3 ms-3' onClick={handlespace}>remove extra spacing</button>



                <h3 className='py-3'>{text.split(" ").filter(word => word).length} words, {text.length} characters</h3>
                <p>{0.008 * text.split(" ").filter(word => word).length} minutes to read</p>

                <h1 style={mystyle}>Second useState Case Converter</h1>
                <p>{text.length>0? text:"enter your text empty"}</p>
                <textarea
                    value={text_2}
                    onChange={handleTextChange}
                    id="mytext"
                    className='form-control'
                ></textarea>
                <button style={mystyle} className='mt-3 btn btn-primary' onClick={btnChange}>Convert to Uppercase</button>
                <p style={mystyle} className='py-3'>{text_2} characters, {text_2.split(" ").filter(word => word).length} words</p>
            </div>
        </div>
    );
};

export default UseStarteOne;
