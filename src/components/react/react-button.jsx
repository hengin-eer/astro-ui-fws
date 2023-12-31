import { useState } from 'react'

const ReactBtn = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

    return (
        <div className='flex flex-col'>
            <h2 className='text-4xl font-bold text-blue-500'>
                React
            </h2>
            <div className='pt-6'>
                <p className='pb-4 text-xl text-white'>
                    Count: {count}
                </p>
                <button className='px-2 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600' onClick={() => addCount()}
                >
                    React Button
                </button>
            </div>
        </div>
    )
};

export default ReactBtn;