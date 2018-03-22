import React from 'react';

const Favorites = props => {


    const favs = () => {

        return  props.favs.map(x => {
                    return (
                        <div key={x.integerId}>
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
                                <hr/>
                        </div>
                    )
                })
    }

    return (
        <div>
            {favs()}
        </div>
    )
}

export default Favorites
