import React from 'react';
import classNames from 'classnames';

function Listing({ items }) {
  return (
    <div className='item-list'>
      {items.map((item) => {
        const quantityClass = classNames('item-quantity', {
          'level-low': item.quantity < 10,
          'level-medium': item.quantity >= 10 && item.quantity < 20,
          'level-high': item.quantity >= 20,
        });
        const characterLimit =
          item.title && item.title.length > 49
            ? `${item.title.slice(0, 49)}...`
            : item.title;
        const currencySelection =
          item.currency_code === 'USD'
            ? '$'
            : item.currency_code === 'EUR'
            ? '€'
            : `${item.currency_code} `;

        return item.error_messages ? null : (
          <div className='item' key={item.listing_id}>
            <div className='item-image'>
              <a href={item.url}>
                <img src={item.MainImage && item.MainImage.url_570xN} alt='' />
              </a>
            </div>
            <div className='item-details'>
              <p className='item-title'>{characterLimit}</p>
              <p className='item-price'>
                {currencySelection}
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
