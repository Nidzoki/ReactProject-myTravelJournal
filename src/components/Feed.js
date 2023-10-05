import Card from "./Card";
import Data from "../data/Data";

export default function Feed(){
    
    return(
        <div className="feed">
            {Data.map(function(props){
                
                        return (<Card key={props.title} props={props}/>)
                    }
                    
                )
            }
        </div>
    )
}
