import React, { useState } from 'react'

const TextContainer = () => {
    const [text,setText] = useState("");
    const [wordCount,setWordCount] = useState(0);
    const [sentenceCount,setSentenceCount] = useState(0);
    const [letterCount,setLetterCount] = useState(0);

    const handleText=(e)=>{
        if(!text){
            return 0;
        }
        let textVal = text.replace(/\s+/g, " ");
         
        calculateLetter(textVal);
        calculateWord(textVal);
        calculateSentence(textVal);
    }

    const calculateLetter=(textVal)=>{
        setLetterCount(textVal.length)
    }

    const calculateWord=(textVal)=>{
        let words = 1;
        for(let i=0;i<textVal.length;i++){
            if(textVal[i]===' '){
                words++;
            }
        }
        setWordCount(words)
    }

    const calculateSentence=(textVal)=>{
        let sentence = 1;
        for(let i=0;i<textVal.length;i++){
            if(textVal[i]==='.'){
                if(textVal[i+1]==' '){
                    sentence++;
                }
            }
        }
        setSentenceCount(sentence);
    }
    
    const formatText=()=>{
        let textVal = text;
        textVal = textVal.replace(/\s+/g, " ");
        setText(textVal)
    }

    const clearText=()=>{
        setText("")
        setLetterCount(0);
        setSentenceCount(0);
        setWordCount(0)
    }

    const copyText=()=>{
        const textarea = document.createElement("textarea");
        const myText = text;
    
        if (!myText) {
            return;
        }
    
        textarea.value = myText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert("Text copied to clipboard");
    }
    return (
        <div class="container">
        <textarea  id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Start typing, or copy and paste your document here..."></textarea>
        <div class="btn-container">
        <button class="btn" onClick={handleText} id="submitBtn">Submit</button>
            <button class="btn" onClick={formatText} id="formatBtn">Format Text</button>
            <button onClick={clearText} class="btn" id="clearBtn">Clear Text</button>
            <button class="btn" onClick={copyText} id="copyBtn">Copy Text</button>
     
        </div>
    
        <div class="info-container">
            <div class="info-box">
                <strong>Letter: </strong>
                <p id="letter">{letterCount}</p>
            </div>
            <div class="info-box">
                <strong>Word: </strong>
                <p id="word">{wordCount}</p>
            </div>
            <div class="info-box">
                <strong>Sentence: </strong>
                <p id="sentence">{sentenceCount}</p>
            </div>
        </div>
      
    </div>
    )
}

export default TextContainer
