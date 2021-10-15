import csvjson from './components/csvjson';
import styles from './styles2.module.css';
const Player = (props) => {
    return (
        <div>
                    {csvjson.filter(val=>{
                    if (props.id === val.ID){
                            return val;
                    }}).map((m) => (
                    
                    <div key={m.ID}>
                        <p className = {styles.cr12}>ID: {m.ID}</p>
                        <p className = {styles.cr12}>Potential :{m.Potential}</p>
                        <p className = {styles.cr12}>Club :{m.Club}</p>
                        <p className = {styles.cr12}>Value: {m.Wage}</p>
                        <p className = {styles.cr12}><img src={m.Nationality}/></p>
                        <p className = {styles.cr12}>Nationality: {m.Flag}</p>
                        <p className = {styles.cr12}>ST: {m.ST}</p>
                        <p className = {styles.cr12}>LW: {m.LW}</p>
                        <p className = {styles.cr12}>LF: {m.LF}</p>
                        <p className = {styles.cr12}>Cf: {m.CF}</p>
                        <p className = {styles.cr12}>RF: {m.RF}</p>
                        <p className = {styles.cr12}>RW: {m.RW}</p>
                        <p className = {styles.cr12}>LAM: {m.LAM}</p>
                        <p className = {styles.cr12}>CAM: {m.CAM}</p>
                        <p className = {styles.cr12}>LM: {m.LM}</p>
                        <p className = {styles.cr12}>LCM: {m.LCM}</p>
                        <p className = {styles.cr12}>CM: {m.CM}</p>
                        <p className = {styles.cr12}>RCM: {m.RCM}</p>
                        <p className = {styles.cr12}>RM: {m.RM}</p>
                        <p className = {styles.cr12}>LWB: {m.LWB}</p>
                        <p className = {styles.cr12}>LDM: {m.LDM}</p>
                        <p className = {styles.cr12}>CDM: {m.CDM}</p>
                        <p className = {styles.cr12}>RDM: {m.RDM}</p>
                        <p className = {styles.cr12}>RWB: {m.RWB}</p>
                    </div>     
                      ))
                    
                    }
                   
        </div>
    )
}
export default Player;