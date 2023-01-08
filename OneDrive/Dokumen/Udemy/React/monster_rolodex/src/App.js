import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          id: '12ads',
          name: 'Achmad'
        },
        {
          id: '12ads2e',
          name: 'Syarif'
        },
        {
          id: '12ads33',
          name: 'Wibisono'
        },
        {
          id: '12ads22',
          name: '123'
        },
      ]
    };
  }
  
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) =>{
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
