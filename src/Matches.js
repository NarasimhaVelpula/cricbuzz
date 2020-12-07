import React from 'react'
import axios from 'axios'
import Match from './Match'
class Matches extends React.Component{
    state={
        matches:[],
        showMatch:false,
        matchdata:"",
        matchId:""
    }
    componentDidMount(){
        
        axios.get("cbzios/match/livematches")
        .then(res=>{
            //console.log(res)
            const matches=res.data.matches;
            this.setState({matches})

        })
    
    
    }
    createMatchCard(){
        const matchCards=this.state.matches.map(match=>{
            return(
                <div className="matchCard" onClick={()=>{this.props.MatchDetails(match.match_id)}}>
                    <div className="details">
                        <div className="team1">
                           { match.team1.s_name }
                        </div>
                        vs
                        <div class="team2">
                            {match.team2.s_name}
                        </div>
                    </div>
                    <div className="status">
                            {match.header.status}
                    </div>
                </div>
            )
        });
        return matchCards;
            
    }
    MatchDetails(matchId){
        this.setState({showMatch:true})
        this.setState({matchId:matchId})
       

    }
    
    render=()=>{
       
       // console.log(this.state.matches)
       if(this.state.showMatch===false)
       {
        return(
            <div>
                {this.createMatchCard()}
            </div>
        )
       }
       else{
           return(
               <div>
               <Match matchId={this.state.matchId} />
               </div>
           )
       }
    }
}
export default Matches