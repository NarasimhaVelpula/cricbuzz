import './App.css';
import Test1 from './Test1';
import React from 'react';
import Match from './Match';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      showMatch:false,
      matchId:""
    }
  }
  matchDetails=(matchid)=>{
    this.setState({showMatch:true,matchId:matchid})
  }
  render=()=>{
    if(this.state.showMatch===false){
  return (
    <div className="App">
      <h1>Live Matches</h1>
       <Test1 MatchDetails={this.matchDetails} />
      <footer>
        @Copyrights Narasimha<br />
        Special Thanks to CricBuzz Apis

      </footer>
    </div>
  );
    }
    else{
      return(
        <div className="App">
        <h1>Live Matches</h1>
         <Match matchId={this.state.matchId} />
        <footer>
          @Copyrights Narasimha<br />
          Special Thanks to CricBuzz Apis
  
        </footer>
      </div>
      )
    }
  }
}

export default App;
