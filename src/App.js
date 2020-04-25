import React, { useState } from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    const setChangeCount = (number) => {
        setCount(count + number);
    }

    return (
        <div className="App">
            <h1>You clicked { count } times</h1>
            <button onClick={() => setChangeCount(-1)}>-</button>
            <button onClick={() => setChangeCount(1)}>+</button>
        </div>
    );
}

export default App;
