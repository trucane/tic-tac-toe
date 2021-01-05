import React from 'react'
import './App.css';
import Board from './components/Board';
import {tiles} from './helpers/mock';


/* 
create a board
crete tiles for board
create players / x o

gameplay:
whos turns
show player token on selection of tile i.e x vs o
if win call  winner
if no winner continue game
if tie call tie

functions:
can reset at anytime

*/



function App() {

  const [player1, setPlayer1] = React.useState(true)
  const [plays, setPlays] = React.useState(tiles)
  const [playedList, setPlayedList] = React.useState([])


  React.useEffect(() => {

  }, [playedList])

  const playGame = (value) => {
    const selected = document.querySelector(`[data-value='${value}']`).children[0]
    const token = player1 ? 'X' : 'O';


    if(plays < 1){
      // decalre tie or win
    }else{
      //continue play
      // change selected innhtml to token
      selected.innerHTML = token
      selected.classList.add('clicked')

      //add selected to list of played tiles
      let val = playedList
      val.push({[token]:value})
      setPlayedList(val)

      //check for winner
      checkWinner(selected, value)
      
    }
  }


  const checkWinner = (tile, index) => {

    //disable tile
    const selected = document.querySelector(`[data-value='${index}']`)
    selected.onClick = function(){
      return false;
    }
      //change player
      //change plays left
      setPlayer1(!player1)
      setPlays( plays - 1)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Board playGame={playGame}/>
        <div>{player1 ? 'Player 1' : 'Player 2'} turn place {player1 ? 'X' : 'O'}</div>
      </header>
    </div>
  );
}

export default App;
