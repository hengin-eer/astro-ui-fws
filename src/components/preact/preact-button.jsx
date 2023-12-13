import { useState } from 'preact/hooks';

const PreactBtn = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-purple-500">
                Preact
            </h2>
            <div className="pt-6">
                <p className="pb-4 text-xl text-white">
                    Count: {count}
                </p>
                <button className="px-2 py-1 text-white bg-purple-500 rounded-lg hover:bg-purple-600" onClick={() => setCount(count + 1)}>
                    Preact Button
                </button>
            </div>
        </div>
    )
}

export default PreactBtn;