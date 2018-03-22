import React from 'react';

const Favorites = props => {


    const favs = () => {

        return  props.favs.map(x => {
                    return (
                        <div key={x.props.integerId} className="post">
                                <img src={x.props.image} alt={x.props.title} />
                                <hr/>
                                {x.props.price ?
                                    <h3>{x.props.price.amounts.USD}</h3>
                                    :
                                    <h3>price upon request</h3>
                                }
                        </div>
                    )
                })
    }

    return (
        <div >
            {props.favs ?
                favs()
                :
                null
            }
        </div>
    )
}

export default Favorites
