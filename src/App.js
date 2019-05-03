import React from 'react';
import './App.css';
let defaultTextColor = 'blueviolet'
let defaultSytle={
  color:defaultTextColor
};

class Aggregate extends React.Component{
  render(){
    return(
      <div style={{...defaultSytle,width: "50%", display:"inline-block"}}>
        <h2>number text</h2>
      </div>
    );
  }
}

class Filter extends React.Component{
  render(){
    return(
      <div style={defaultSytle}>
      Filtre
      <input type="text"/>
      </div>
    );
  }
}

class Playlist extends React.Component{
  render(){
    return(
      <div style={{...defaultSytle, display:"inline-block" ,width:"25%"}}>
        Playlist<p/>
        Resim
        <ul><li>1 song</li><li>2 song</li><li>3 song</li></ul>
      </div>
    );
  }
}

function App() {

  return (
    <div className="App">
      <h1>Tittle </h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
    </div>
  );
}

export default App;
