import React from 'react';
import './App.css';

let defaultSytle={
  color: 'rgb(217, 205, 240)'
};

let fakeServerDate={
  user:{
    name: "Okan"
  }
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

class Title extends React.Component{
  render(){
      return(
        <div>
      <h1 style={{defaultSytle,'font-size':"54px"}}>
      {fakeServerDate.user.name}'s playlist 
      </h1>

        </div>

      )
  }
}

function App() {

  return (
    
    <div className="App">

      <Title/>
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
