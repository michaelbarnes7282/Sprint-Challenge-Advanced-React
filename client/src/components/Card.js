import React from 'react';

export default function Card(props) {
    // console.log(props)
    return (
        <div className ='card'>
            <div className='card-info'>
            <h2>Name: {props.item.name}</h2>
            <p>Country: {props.item.country}</p>
            <p>Searches: {props.item.searches}</p>
            </div>
        </div>
    )
}