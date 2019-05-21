import React from 'react'

export default function Display(props) {
    const {balls, strikes} = props;
    
    if(balls === 0 && strikes === 0){
        return(
            <div>
             
            <div>
            Balls :  {balls}
            </div>
            <br />
            
            <div>
            Strikes :  {strikes}
            </div>
        </div>
        )
    }else if(!balls && !strikes ){
        return <h3>no props passed</h3>
    } 

    return (
        <div>
            
            <div data-testid='ball-counts'>
            Balls : {balls}
            </div>
            <br />
            
            <div data-testid='strike-counts'>
            Strikes : {strikes}
            </div>
        </div>
    )
}
