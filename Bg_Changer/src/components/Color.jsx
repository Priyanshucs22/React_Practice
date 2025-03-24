import React, { useState } from 'react';

function Color() {
    const [color, setColor] = useState('white');

    return (
        <div className={'w-screen h-screen flex items-center justify-center transition-colors duration-300'} style={{ backgroundColor: color }}>
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
                <button onClick={() => setColor("red")} className="rounded-2xl bg-red-500 border-2 border-red-700 text-white p-2">Red</button>
                <button onClick={() => setColor("green")} className="rounded-2xl bg-green-500 border-2 border-green-700 text-white p-2">Green</button>
                <button onClick={() => setColor("blue")} className="rounded-2xl bg-blue-500 border-2 border-blue-700 text-white p-2">Blue</button>
                <button onClick={() => setColor("yellow")} className="rounded-2xl bg-yellow-400 border-2 border-yellow-600 text-black p-2">Yellow</button>
                <button onClick={() => setColor("black")} className="rounded-2xl bg-black border-2 border-gray-700 text-white p-2">Black</button>
                <button onClick={() => setColor("white")} className="rounded-2xl bg-white border-2 border-gray-400 text-black p-2">White</button>
                <button onClick={() => setColor("purple")} className="rounded-2xl bg-purple-500 border-2 border-purple-700 text-white p-2">Purple</button>
                <button onClick={() => setColor("orange")} className="rounded-2xl bg-orange-500 border-2 border-orange-700 text-white p-2">Orange</button>
                <button onClick={() => setColor("gray")} className="rounded-2xl bg-gray-500 border-2 border-gray-700 text-white p-2">Grey</button>
            </div>
        </div>
    );
}

export default Color;
