import React from 'react';
import Item from './Item';
import LikeButton from './LikeButton';

const Items = (props) => {
  return (
    <div className={props.view === 'item' ? null : 'posts'}>
      {props.dataLoaded && props.view === 'item' ? (
        <Item item={props.item} showItem={props.showItem} />
      ) : (
        props.data.map((x) => {
          return (
            <div key={x.integerId} className="post">
              <a onClick={() => props.showItem(x.integerId)}>
                <img src={x.image} alt={x.title} />
                <hr />
                {x.price ? (
                  <h3>{x.price.amounts.USD}</h3>
                ) : (
                  <h3>price upon request</h3>
                )}
              </a>

              <LikeButton
                des={x}
                id={x.integerId}
                title={x.title}
                view={props.view}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Items;
