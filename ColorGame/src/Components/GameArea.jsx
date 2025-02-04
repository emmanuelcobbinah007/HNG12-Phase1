import React, {useState, useEffect} from 'react'
import '../App.css'

const GameArea = () => {
    const [score, setScore] = useState(0);
    const [colors, setColors] = useState([]);
    const [targetColor, setTargetColor] = useState('');
    const [status, setStatus] = useState('');
    const [statusColor, setStatusColor] = useState('');

    const colorArray = [
        "#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD", "#16A085", "#D35400", "#2C3E50", "#E74C3C", "#27AE60",
        "#2980B9", "#F1C40F", "#9B59B6", "#1ABC9C", "#C0392B", "#7D3C98", "#145A32", "#512E5F", "#F4D03F", "#3498DB",
        "#E67E22", "#BA4A00", "#58D68D", "#5DADE2", "#AF7AC5", "#F1948A", "#82E0AA", "#85C1E9", "#F7DC6F", "#EB984E",
        "#6C3483", "#117A65", "#A93226", "#F5B041", "#5499C7", "#1F618D", "#A569BD", "#28B463", "#CB4335", "#2ECC71",
        "#DFFF00", "#FFBF00", "#FF7F50", "#DE3163", "#6495ED", "#40E0D0", "#9FE2BF", "#CCCCFF", "#800080", "#FF69B4",
        "#FFD700", "#FF4500", "#00CED1", "#7FFFD4", "#00FA9A", "#ADFF2F", "#FFB6C1", "#FA8072", "#4682B4", "#B0C4DE",
        "#708090", "#D2B48C", "#DAA520", "#CD5C5C", "#5F9EA0", "#DC143C", "#FF6347", "#8B008B", "#8B0000", "#BDB76B",
        "#6A5ACD", "#556B2F", "#00FF7F", "#E9967A", "#FF8C00"
      ];
      

      const pushOptions = () => {
        const colorArrayCopy = [...colorArray];
        const colours = [];
        for (let i = 0; i < 6; i++) {
          const randomColor = colorArrayCopy[Math.floor(Math.random() * colorArrayCopy.length)];
          colours.push(randomColor);
        }
        setColors(colours);
      }

      useEffect(() => {
        pushOptions();
      }, []);
    
      useEffect(() => {
        if (colors.length > 0) {
          const randomTargetColor = colors[Math.floor(Math.random() * colors.length)];
          setTargetColor(randomTargetColor);
        }
      }, [colors]);

      const confirmColor = (e) => {
        const tColor = document.getElementsByClassName('colorDisplay')[0].style.backgroundColor;

        if (e.target.style.backgroundColor === tColor) {
          setScore(score + 1);
          setStatus('Correct!');
          setStatusColor('green');
          pushOptions();
        } else {
            setStatusColor('red');
            if (score === 0) {
                setScore(0);
                setStatus('You lose! Try again');
                pushOptions();
            } else {
                setScore(score - 1);
                setStatus('Wrong!');
                pushOptions();
            }
        }

      }

      const restartGame = () => {
        setScore(0);
        pushOptions();
    }


  return (
    <div>
        <div className='colorDisplay' style={{backgroundColor: targetColor}} data-testid="colorBox"></div>
        <div>
            <h2 data-testid="gameInstructions">Guess The Current Color</h2>
        </div>
        <div>
        {colors.map((color, index) => {
          return <div data-testid="colorOption" key={index} className='colorOption' onClick={confirmColor} style={{backgroundColor: color}}></div>
        })}

        </div>
        <p className='status' style={{color: statusColor}} data-testid="gameStatus">{status}</p>
        <p className='scoreDisplay' data-testid="score">Score: {score}</p>
        <button className='startBtn' data-testid="newGameButton" onClick = {restartGame}>New Game</button>

    </div>
  )
}

export default GameArea;