import React, {useState} from 'react'

export default function TextForm(props) {
  const handleclickUp = ()=>{
    console.log('uppercase click' +text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleclickDown = ()=>{
    console.log('uppercase click' +text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleonChange = (event) =>{
    console.log('On Change');
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <div id='fm-div'>
        <h1 id='form-head'>{props.heading}</h1>
        <textarea name="text-area" id="my-box" cols={props.cs}  rows={props.rs} placeholder= {props.hold} value={text} onChange={handleonChange}></textarea>
        <div className="buttons">
          <button onClick={handleclickUp} id='btn'>Convert to upper Case</button>
          <button onClick={handleclickDown} id='btn'>Convert to lower Case</button>
        </div>
        <div className="metrics">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <div className="time">
            <h1>Time Required</h1>
            <p>{0.008 * text.split(" ").length} Minutes to read this Content </p>
            <p>for an average Reader</p>
          </div>
        </div>
    </div>
  )
}