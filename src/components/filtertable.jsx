import { useState } from 'react';
import csvjson from './csvjson.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import player from '../player'

const Searchtable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const route = (q) => {
        let p = '/player/'+q;
        window.location.href = p;
    }

    return (
        <Router>  
        <div className="container">
            <input 
            type="text" 
            placeholder="Search.."
            className="form-control" 
            style={{marginTop:50, marginBottom:20, width:"40%"}} 
            onChange ={(e)=>{
               setsearchTerm(e.target.value); 
            }}
            />

            <table className="table table-bordered">
                <thead className= "thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Nationality</th>
                        <th>Overall</th>
                        <th>Potential</th>
                        <th>Club</th>
                        <th>Value</th>
                        <th>Wage</th>
                        <th>preferred Foot</th>

                    </tr>
                    </thead>
                     <tbody>
                    {csvjson.filter(val=>{
                    if (searchTerm === ''){
                            return val;
                        }else if(
                            // val.ID.includes(searchTerm)   ||
                            val.Age.toLowerCase().includes(searchTerm.toLowerCase())  ||
                            val.Nationality.toLowerCase().includes(searchTerm.toLowerCase())  
                        ){
                            return val
                        }
                   
                    }).map((m) => (
                    
                    <tr key={m.ID} onClick={()=>route(m.ID)}>
                    <td>{m.ID}</td>
                    <td>{m.Age}</td>
                    <td>{m.Photo}</td>
                    <td>{m.Flag}</td>
                    <td>{m.Nationality}</td>
                    <td>{m.Nationality}</td>
                    <td>{m.Nationality}</td>
                    <td>{m.Nationality}</td>
                    <td>{m.Nationality}</td>
                    <td>{m.Nationality}</td>

                    </tr>     
                      ))
                    
                    }</tbody>
                   
            </table>
             </div>
             <Switch>
                <Route path="/player">
                    <player />
                </Route>
            </Switch>
        </Router>
    );
}
 
export default Searchtable;