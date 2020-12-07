import React from 'react'
import axios from 'axios'

class Test1 extends React.Component{
    constructor(){
        super()
        this.state={
            matches:""
        }
        setInterval(this.getMatches,10000)
    }
        getMatches=()=>{
            axios.get("/cbzios/match/livematches")
            .then(res=>{
                const matches=res.data.matches
                //console.log("renderign matches")
                console.log(matches[0].header.status)
                this.setState({matches})
            }
            )
        }
        componentDidMount(){
            axios.get("/cbzios/match/livematches")
            .then(res=>{
                const matches=res.data.matches
                //console.log("renderign matches")
               // console.log(matches[0].header.status)
                this.setState({matches})
            }
            )
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

        render=()=>{
            
            try{
            return(
                <div>
                {this.createMatchCard()}
                </div>
            )
            }
            catch(err){
                return(
                    <h1>failed in Mounting or api problem</h1>
                )
            }
        }
    
}
export default Test1