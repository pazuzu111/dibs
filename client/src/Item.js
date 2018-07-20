import React from 'react';
import LikeButton from './LikeButton';

const Item = props => {

    return (
        <div className="favs">
          <LikeButton des={props.item} id={props.item.integerId} title={props.item.title} />

            <img src={props.item.image} alt={props.item.title} />
            <div>
                <h2>{props.item.title}</h2>
                <h3><span>{props.item.measurements.display}</span></h3>
                <button>PURCHASE</button>
                <button>MAKE OFFER!</button>
            </div>
            <div>
                <h3><span>{props.item.description}</span></h3>
                <h3>Creators: {props.item.creators}</h3>
            </div>
        </div>
    )
}

export default Item
