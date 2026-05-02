import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [minValue] = useState(-100);
  const [maxValue] = useState(100);

  const increment = () => {
    if (count < maxValue) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > minValue) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const incrementByTen = () => {
    const newValue = count + 10;
    if (newValue <= maxValue) {
      setCount(newValue);
    } else {
      setCount(maxValue);
    }
  };

  const decrementByTen = () => {
    const newValue = count - 10;
    if (newValue >= minValue) {
      setCount(newValue);
    } else {
      setCount(minValue);
    }
  };

  const isAtMin = count <= minValue;
  const isAtMax = count >= maxValue;

  return (
    <div className="counter-container">
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      
      <div className="counter-info">
        <span className="range-info">Range: {minValue} to {maxValue}</span>
      </div>

      <div className="counter-controls">
        <div className="button-row">
          <button 
            className="counter-btn decrement-btn" 
            onClick={decrementByTen}
            disabled={isAtMin}
            title="Decrease by 10"
          >
            -10
          </button>
          <button 
            className="counter-btn decrement-btn" 
            onClick={decrement}
            disabled={isAtMin}
            title="Decrease by 1"
          >
            -
          </button>
          <button 
            className="counter-btn reset-btn" 
            onClick={reset}
            title="Reset to 0"
          >
            Reset
          </button>
          <button 
            className="counter-btn increment-btn" 
            onClick={increment}
            disabled={isAtMax}
            title="Increase by 1"
          >
            +
          </button>
          <button 
            className="counter-btn increment-btn" 
            onClick={incrementByTen}
            disabled={isAtMax}
            title="Increase by 10"
          >
            +10
          </button>
        </div>
      </div>

      {isAtMin && (
        <div className="limit-warning min-warning">
          Minimum value reached!
        </div>
      )}
      
      {isAtMax && (
        <div className="limit-warning max-warning">
          Maximum value reached!
        </div>
      )}
    </div>
  );
};

export default Counter;