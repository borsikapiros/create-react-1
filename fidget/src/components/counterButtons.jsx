import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <button onClick={() => setCount(count - 1)} className="btn-counter">Gimme less</button>
            <div className="showCount">{count}</div>
            <button onClick={() => setCount(count + 1)} className="btn-counter">Gimme more</button>
        </div>
    );
};
export default Counter;