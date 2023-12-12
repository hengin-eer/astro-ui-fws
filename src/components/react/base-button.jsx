import { useState } from 'react'

const BaseBtn = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={() => addCount()}>React Button</button>
            <p>Count: {count}</p>
        </div>
    )
};

export default BaseBtn;