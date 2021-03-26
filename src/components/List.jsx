import React from 'react';

function List(props){
    return <div className='list-container'>
        <li>{props.item}</li>
        <span onClick={props.onclick} >x</span>
        
    </div>
}

export default List