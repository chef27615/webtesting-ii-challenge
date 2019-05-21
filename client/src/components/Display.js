import React from 'react'

export default function Display(props) {
    const {balls, strikes} = props;
    
    if(balls === 0 && strikes === 0){
        return(
            <div>
            Balls 
            <div>
                {balls}
            </div>
            <br />
            Strikes 
            <div>
                {strikes}
            </div>
        </div>
        )
    }else if(!balls && !strikes ){
        return <h3>no props passed</h3>
    } 

    return (
        <div>
            Balls 
            <div data-testid='ball-counts'>
                {balls}
            </div>
            <br />
            Strikes 
            <div data-testid='strike-counts'>
                {strikes}
            </div>
        </div>
    )
}
