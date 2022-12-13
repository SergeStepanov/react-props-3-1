import React from 'react';

function Listing({ items }) {

  return (
    <div className='item-list'>
      {items.map((item) => {
        const quantityClass = `item-quantity level-${
          item.quantity < 20 ? (item.quantity < 10 ? 'low' : 'medium') : 'high'
        }`;
        return item.error_messages ? null : (
          <div className='item' key={item.listing_id}>
            <div className='item-image'>
              <a href={item.url}>
                <img
                  src={item.MainImage && item.MainImage.url_570xN}
                  alt=''
                />
              </a>
            </div>
            <div className='item-details'>
              <p className='item-title'>
                {item.title && item.title.length > 49
                  ? `${item.title.slice(0, 49)}...`
                  : item.title}
              </p>
              <p className='item-price'>
                {item.currency_code === 'USD'
                  ? '$'
                  : item.currency_code === 'EUR'
                  ? '€'
                  : `${item.currency_code} `}
                {item.price}
              </p>
              <p className={quantityClass}>{item.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};

export default Listing;
