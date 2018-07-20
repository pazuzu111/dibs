import React from 'react';
import LikeButton from './LikeButton'

const Favorites = props => {

    const favs = () => {

        return  props.favs.map(x => {
                    return (
                        <div key={x.integerId} className="favs">
                                <LikeButton des={x} id={x.integerId} title={x.title} showFavs={props.showFavs} view1={props.view} />

                                <img src={x.image} alt={x.title} />
                                {x.price ?
                                    <h3>{x.price.amounts.USD}</h3>
                                    :
                                    <h3>price upon request</h3>
                                }
                                <div>
                                  <h2>{x.title}</h2>
                                  <h3><span>{x.measurements.display}</span></h3>
                                  <button>PURCHASE</button>
                                  <button>MAKE OFFER!</button>
                                </div>
                                <div>
                                  <h3><span>{x.description}</span></h3>
                                  <h3>Creators: {x.creators}</h3>
                                </div>
                        </div>
                    )
                })
    }

    let wrap = {
      "display": "flex",
      "flex-wrap": "wrap"
    }
    return (
        <div style={wrap}>
            {favs()}
        </div>
    )
}

export default Favorites
