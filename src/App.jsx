import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

    function App() {
      const [text, setText] = useState("");
      const [color, setColor] = useState("");
      const [displayText, setDisplayText] = useState("");
      const [displayColor, setDisplayColor] = useState("");
    
      const handleClick = () => {
        setDisplayText(text);
        setDisplayColor(color);
      };
    
      return (
        <div style={{ padding: "20px" }}>
          <div className=''>
            <input
            className='w-72 h-8 p-1 rounded m-3 input bg-gray-300 border-solid border-black '
              type="text"
              placeholder="Enter text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
            className=' color'
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <button
            className='m-3 border-solid border-black hover:bg-gray-700 hover:text-white'
            onClick={handleClick}>Display Text</button>
          </div>
          <div style={{ marginTop: "20px", color: displayColor }}>
            {displayText && <span>{displayText}</span>}
          </div>
        </div>
      );
    }
    
    export default App;
    

