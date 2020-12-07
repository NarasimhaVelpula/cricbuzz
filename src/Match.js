import React from 'react';
import axios from 'axios';
class Match extends React.Component{
    state={
        matchId:this.props.matchId,
        matchdata:{
            "match_id" : "30544",
            
            "series_id" : "3213",
            
            "series_name" : "India tour of Australia 2020-21",
            
            "data_path" : "2020/2020-21_AUS_IND/AUS_IND_DEC06/",
            
            "header" : {
            
            "start_time" : "1607242200",
            
            "end_time" : "1607254800",
            
            "state" : "inprogress",
            
            "match_desc" : "2nd T20I",
            
            "type" : "T20",
            
            "state_title" : "In Progress",
            
            "toss" : "India elect to bowl",
            
            "status" : "IND opt to bowl"
            
            }
            
            ,
            
            "alerts" : "1",
            
            "venue" : {
            
            "name" : "Sydney Cricket Ground",
            
            "location" : "Sydney, Australia"
            
            ,
            
            "timezone": "+11:00",
            
            "lat": "-33.868820",
            
            "long": "151.209296"
            
            }
            
            ,
            
            "over_summary" : {
            
            "over" : "4",
            
            "ball_def": "24",
            
            "rem_over" : "4",
            
            "runs" : "41",
            
            "wickets" : "1",
            
            "fours" : "3",
            
            "sixes" : "1"
            
            },
            
            "bat_team" : {"id" : "4",
            
            "name" : "AUS",
            
            "innings":[
            
            {
            
            "id" : "1",
            
            "score" : "151",
            
            "wkts" : "3"
            
            ,"overs" : "15.5"
            
            }
            
            ]}
            
            ,
            
            "batsman" : [
            
            {
            
            "id" : "1437",
            
            "name" : "Henriques",
            
            "strike":"1",
            
            "r" : "16",
            
            "b" : "9",
            
            "4s" : "0",
            
            "6s" : "1"
            
            }
            
            ,{
            
            "id" : "2250",
            
            "name" : "Steven Smith",
            
            "strike":"0",
            
            "r" : "37",
            
            "b" : "32",
            
            "4s" : "3",
            
            "6s" : "1"
            
            }
            
            ],
            
            "bowler" : [
            
            {
            
            "id" : "7910",
            
            "name" : "Chahal",
            
            "o" : "2.5",
            
            "m" : "0",
            
            "r" : "40",
            
            "w" : "0"
            
            }
            
            ]
            
            ,
            
            "proj_scr" : "190",
            
            "crr" : "9.54",
            
            "target" : "",
            
            "prtshp" : "31(19)",
            
            "last_wkt" : "7662",
            
            "last_wkt_name" : "Maxwell",
            
            "last_wkt_score" : "22 (13)",
            
            "comm_lines" : [
            
            {
            
            "timestamp" : "1607246744648",
            
            "score" : "151",
            
            "wkts" : "3",
            
            "o_no" : "16",
            
            "i_id" : "1",
            
            "runs" : "19",
            
            "o_summary" :
            
            [
            
            "1"
            
            ,"6"
            
            ,"1"
            
            ,"1"
            
            ,"4Wd"
            
            ,"6"
            
            ],
            
            "batsman" : [
            
            "2250"
            
            ,"1437"
            
            ],
            
            "bowler" : [
            
            "7910"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607246513723",
            
            "score" : "132",
            
            "wkts" : "3",
            
            "o_no" : "15",
            
            "i_id" : "1",
            
            "runs" : "5",
            
            "o_summary" :
            
            [
            
            "1"
            
            ,"0"
            
            ,"0"
            
            ,"1"
            
            ,"2"
            
            ,"1"
            
            ],
            
            "batsman" : [
            
            "2250"
            
            ,"1437"
            
            ],
            
            "bowler" : [
            
            "10225"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607246229026",
            
            "score" : "127",
            
            "wkts" : "3",
            
            "o_no" : "14",
            
            "i_id" : "1",
            
            "runs" : "4",
            
            "o_summary" :
            
            [
            
            "0"
            
            ,"0"
            
            ,"1"
            
            ,"1"
            
            ,"1"
            
            ,"1"
            
            ],
            
            "batsman" : [
            
            "2250"
            
            ,"1437"
            
            ],
            
            "bowler" : [
            
            "10945"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607246000078",
            
            "score" : "123",
            
            "wkts" : "3",
            
            "o_no" : "13",
            
            "i_id" : "1",
            
            "runs" : "12",
            
            "o_summary" :
            
            [
            
            "4"
            
            ,"4"
            
            ,"1"
            
            ,"W"
            
            ,"1"
            
            ,"2"
            
            ],
            
            "batsman" : [
            
            "7662"
            
            ,"2250"
            
            ,"1437"
            
            ],
            
            "bowler" : [
            
            "8683"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607245703111",
            
            "score" : "111",
            
            "wkts" : "2",
            
            "o_no" : "12",
            
            "i_id" : "1",
            
            "runs" : "11",
            
            "o_summary" :
            
            [
            
            "2"
            
            ,"0"
            
            ,"1"
            
            ,"6"
            
            ,"1"
            
            ,"1"
            
            ],
            
            "batsman" : [
            
            "7662"
            
            ,"2250"
            
            ],
            
            "bowler" : [
            
            "7910"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607245490690",
            
            "score" : "100",
            
            "wkts" : "2",
            
            "o_no" : "11",
            
            "i_id" : "1",
            
            "runs" : "9",
            
            "o_summary" :
            
            [
            
            "4"
            
            ,"0"
            
            ,"1"
            
            ,"1"
            
            ,"1"
            
            ,"2"
            
            ],
            
            "batsman" : [
            
            "2250"
            
            ,"7662"
            
            ],
            
            "bowler" : [
            
            "7836"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607245246587",
            
            "score" : "91",
            
            "wkts" : "2",
            
            "o_no" : "10",
            
            "i_id" : "1",
            
            "runs" : "10",
            
            "o_summary" :
            
            [
            
            "0"
            
            ,"6"
            
            ,"2"
            
            ,"1"
            
            ,"1"
            
            ,"0"
            
            ],
            
            "batsman" : [
            
            "2250"
            
            ,"7662"
            
            ],
            
            "bowler" : [
            
            "7910"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607245002507",
            
            "score" : "81",
            
            "wkts" : "2",
            
            "o_no" : "9",
            
            "i_id" : "1",
            
            "runs" : "6",
            
            "o_summary" :
            
            [
            
            "1"
            
            ,"1"
            
            ,"1"
            
            ,"1"
            
            ,"1"
            
            ,"1"
            
            ],
            
            "batsman" : [
            
            "2250"
            
            ,"7662"
            
            ],
            
            "bowler" : [
            
            "10225"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607244715289",
            
            "score" : "75",
            
            "wkts" : "2",
            
            "o_no" : "8",
            
            "i_id" : "1",
            
            "runs" : "7",
            
            "o_summary" :
            
            [
            
            "1"
            
            ,"1"
            
            ,"2"
            
            ,"2"
            
            ,"0"
            
            ,"Wd"
            
            ,"W"
            
            ],
            
            "batsman" : [
            
            "2250"
            
            ,"1649"
            
            ],
            
            "bowler" : [
            
            "10945"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607244449725",
            
            "score" : "68",
            
            "wkts" : "1",
            
            "o_no" : "7",
            
            "i_id" : "1",
            
            "runs" : "9",
            
            "o_summary" :
            
            [
            
            "1"
            
            ,"4"
            
            ,"1"
            
            ,"0"
            
            ,"Wd"
            
            ,"1"
            
            ,"1"
            
            ],
            
            "batsman" : [
            
            "2250"
            
            ,"1649"
            
            ],
            
            "bowler" : [
            
            "7836"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607244067121",
            
            "score" : "59",
            
            "wkts" : "1",
            
            "o_no" : "6",
            
            "i_id" : "1",
            
            "runs" : "12",
            
            "o_summary" :
            
            [
            
            "4"
            
            ,"4"
            
            ,"0"
            
            ,"4"
            
            ,"0"
            
            ,"0"
            
            ],
            
            "batsman" : [
            
            "1649"
            
            ],
            
            "bowler" : [
            
            "8683"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607243748320",
            
            "score" : "47",
            
            "wkts" : "1",
            
            "o_no" : "5",
            
            "i_id" : "1",
            
            "runs" : "1",
            
            "o_summary" :
            
            [
            
            "1"
            
            ,"0"
            
            ,"W"
            
            ,"0"
            
            ,"0"
            
            ,"0"
            
            ],
            
            "batsman" : [
            
            "1649"
            
            ,"11050"
            
            ,"2250"
            
            ],
            
            "bowler" : [
            
            "10225"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607243393637",
            
            "score" : "46",
            
            "wkts" : "0",
            
            "o_no" : "4",
            
            "i_id" : "1",
            
            "runs" : "15",
            
            "o_summary" :
            
            [
            
            "4"
            
            ,"4"
            
            ,"1"
            
            ,"0"
            
            ,"2"
            
            ,"4"
            
            ],
            
            "batsman" : [
            
            "1649"
            
            ,"11050"
            
            ],
            
            "bowler" : [
            
            "10945"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607243089670",
            
            "score" : "31",
            
            "wkts" : "0",
            
            "o_no" : "3",
            
            "i_id" : "1",
            
            "runs" : "8",
            
            "o_summary" :
            
            [
            
            "4"
            
            ,"1"
            
            ,"1"
            
            ,"0"
            
            ,"Wd"
            
            ,"1"
            
            ,"0"
            
            ],
            
            "batsman" : [
            
            "1649"
            
            ,"11050"
            
            ],
            
            "bowler" : [
            
            "8683"
            
            ]
            
            }
            
            ,{
            
            "timestamp" : "1607242763572",
            
            "score" : "23",
            
            "wkts" : "0",
            
            "o_no" : "2",
            
            "i_id" : "1",
            
            "runs" : "10",
            
            "o_summary" :
            
            [
            
            "1"
            
            ,"0"
            
            ,"6"
            
            ,"1"
            
            ,"1"
            
            ,"1L"
            
            ],
            
            "batsman" : [
            
            "11050"
            
            ,"1649"
            
            ],
            
            "bowler" : [
            
            "10945"
            
            ]
            
            }
            
            ]
            
            ,
            
            "range" : "20",
            
            "pulltoRefreshStopRate" : 5,
            
            "burst_cache_id" : 0,
            
            "burst_cache" : true,
            
            "burst_cache_time" : 3600,
            
            "ads" :
            
            {}
            
            }
        
       
        
    }
    componentDidMount(){
        const matchId=this.props.matchId
        axios.get("cbzios/match/"+matchId+"/mini-commentary")
        .then(res=>{
            const matchdata=res.data;
            //console.log("match data here")
            //console.log(matchdata);
            this.setState({matchdata:matchdata})
        })
        setInterval(this.getMatchAPI,5000,matchId);
        
       
    }
    getMatchAPI=(matchId)=>{
       // console.log(this.state);
        axios.get("cbzios/match/"+matchId+"/mini-commentary")
        .then(res=>{
            const matchdata=res.data;
            //console.log("match data here")
            //console.log(matchdata);
            this.setState({matchdata:matchdata})
        })
    }
    getDetails(){
        console.log(this.state.matchdata.header.state);
        if(this.state.matchdata.header.state==="toss" || this.state.matchdata.header.state==="preview"){
            return(
            <div>
            <h1>{this.state.matchdata.series_name}</h1>
            <h2>{this.state.matchdata.header.status}</h2>
            </div>
            )
        }
        else{
        return(
            <div>
                <h1>{this.state.matchdata.series_name}</h1>
                <h2>{this.state.matchdata.header.status}</h2>
                <div>
                    {this.state.matchdata.bat_team.name}: {this.state.matchdata.bat_team.innings[0].score} / {this.state.matchdata.bat_team.innings[0].wkts}<br />
                    <table cellSpacing="10">
                        <thead>
                            <tr>
                                <th>Batsmen</th>
                                <th>Runs</th>
                                <th>Balls</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.matchdata.batsman.map((bat)=>{
                                return(
                                    <tr>
                                <td>{bat.name}</td>
                                <td>{bat.r}</td>
                                <td>{bat.b}</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <br />
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Bowler</th>
                                <th>overs</th>
                                <th>Maidens</th>
                                <th>Runs</th>
                                <th>Wickets</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.matchdata.bowler[0].name}</td>
                                <td>{this.state.matchdata.bowler[0].o}</td>
                                <td>{this.state.matchdata.bowler[0].m}</td>
                                <td>{this.state.matchdata.bowler[0].r}</td>
                                <td>{this.state.matchdata.bowler[0].w}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <td colspan="2">Over Summary</td>
                            <td></td>
                            {this.state.matchdata.comm_lines[0].o_summary.map((ball)=>{return(<td className="ball">{ball}</td>)})}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
    render=()=>{
        
        return(
            <div>
                {this.getDetails()}
            </div>
        )
    }
}
export default Match