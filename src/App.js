import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';

function App() {

//   function tossCoin() {
//     return Math.random() > 0.5 ? "heads" : "tails";
// }
//   function fiveHeads() {
//     return new Promise( (resolve, reject) => {
//         // your code here!
//       let headsCount = 0;
//       let attempts = 0;
//       while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         if(result === "heads") {
//           headsCount++;
//         } else {
//           headsCount = 0;
//         }
//       }
//       if (attempts < 100){
//         resolve(" Head has been flipped five times ")
//       } else {
//         reject(" Coin has been flipped more than 100 times")
//       }
//     });
// }

// fiveHeads()
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) );
// console.log( "When does this run now?" );

const [pokemon, setPokemon] = useState([])
const [isLoading, setIsLoading] = useState(false)

const handleClick = () => {
  setIsLoading(true);
  fetch(" https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(pokemonData => {
        setPokemon(pokemonData.results)
        setIsLoading(false)
    } )
}


  return (
    <div className="App">
      <button onClick= { handleClick }>fetch Pokemon</button>
      <div>
            {isLoading ? "Loading..." : pokemon.map((poke, i) => <p key={i}> {poke.name} </p> )}  
      </div>
    </div>
  );
}

export default App;
