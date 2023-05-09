import { useState } from 'react';
import './priceRangeSlider.scss'

function PriceRangeSlider() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    function handleMinPriceChange(event) {
        const value = Math.max(0, Math.min(Number(event.target.value), maxPrice));
        setMinPrice(value);
    }

    function handleMaxPriceChange(event) {
        const value = Math.min(Math.max(Number(event.target.value), minPrice), 1000);
        setMaxPrice(value);
    }

    return (
        <div className="price-range-slider">
            <label className='price-range-slider__min-price' htmlFor="min-price">Минимальная цена:</label>
            <input
                className="price-input"
                type="number"
                id="min-price"
                value={minPrice}
                onChange={handleMinPriceChange}
            />
            <br />
            <label className='price-range-slider__max-price' htmlFor="max-price">Максимальная цена:</label>
            <input
                className="price-input"
                type="number"
                id="max-price"
                value={maxPrice}
                onChange={handleMaxPriceChange}
            />
            <br />
            <input
                className="price-slider"
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={handleMinPriceChange}
            />
            <input
                className="price-slider"
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={handleMaxPriceChange}
            />

            <button className='price-range-button'>
                Застосувати
            </button>
        </div>
    );
}

export default PriceRangeSlider;
