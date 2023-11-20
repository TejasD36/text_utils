import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleOnChange = (event)=>{
        // console.log("Changed")
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleLowClick = ()=>{
        // console.log("Uppercase was Clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was Clicked");
        // let newText=text.toLowerCase();
        setText('');
        props.showAlert("Text Cleared","success");
    }

    const handleCopy = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }

    const handleExtraSpaces = () =>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Cleared Extra Spaces","success");
    }

    const[text,setText]=useState('');
    //text="new text";  Wrong way to change value
    //setText("new text"); Correct way to change
    return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <div className="mb-3">
            <h1 >{props.heading}</h1>
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#042743':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" value={text}  placeholder="Enter text here" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
                Convert to LowerCase
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
                Clear Text
            </button>

        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to Preview...."}</p>
        </div>
    </>
  )
}

TextForm.propTypes={
    heading : PropTypes.string.isRequired
}