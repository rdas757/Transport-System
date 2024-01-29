import React, {useState} from 'react'
import './Card.css'

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="Card">
            <CompactCard param = {props}/>
        </div>
    )
}

function CompactCard ({param}){
    return(
        <div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        >
            <div className="detail">
                <span>{param.title}</span>
                <span>{param.value}</span>
                <span>Last updated 1 hour ago</span>
            </div>
        </div>
    )
}

export default Card
