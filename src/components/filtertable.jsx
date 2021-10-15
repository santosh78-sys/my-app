import { useState } from 'react';
import csvjson from './csvjson.json';
import ReactDOM from 'react-dom';
import Styles from './styles.module.css';
import Player from '../Player'

const Searchtable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const route = (q) => {
        ReactDOM.render(
            <Player id={q}/>,
        document.getElementById('root'));
    }

    return (
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
                  <td className = {Styles.cr7}>{m.ID}</td>
                  <td className = {Styles.cr7}>{m.Age}</td>
                  <td className = {Styles.cr7}>{m.Photo}</td>
                  <td className = {Styles.cr7}>{m.Flag}</td>
                  <td className = {Styles.cr7}>{m.Club}</td>
               
                    </tr>     
                      ))
                    
                    }</tbody>
                   
            </table>
             </div>

    );
}
 
export default Searchtable;