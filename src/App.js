import logo from './logo.svg';
import './App.css';

function App() {

  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//   let headsCount = 0;
//   let attempts = 0;
//   while(headsCount < 5) {
//       attempts++;
//       let result = tossCoin();
//       console.log(`${result} was flipped`);
//       if(result === "heads") {
//           headsCount++;
//       } else {
//           headsCount = 0;
//       }
//   }
//   return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );


  function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
      let headsCount = 0;
      let attempts = 0;
      while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        if(result === "heads") {
          headsCount++;
        } else {
          headsCount = 0;
        }
      }
      if (attempts < 100){
        resolve(" Head has been flipped five times ")
      } else {
        reject(" Coin has been flipped more than 100 times")
      }
    });
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );



  return (
    <div className="App">

    </div>
  );
}

export default App;
