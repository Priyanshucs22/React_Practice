import React from 'react'

function Card({userName , btnText="visit me"}) {
  return (
    <div className="max-w-sm bg-black-700 rounded-2xl shadow-lg p-6">
        <img className="w-32 h-32 mx-auto rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="User"/>
        <h2 className="mt-4 text-xl font-semibold text-center">{userName}</h2>
        <p className="text-white-600 text-center mt-2">A passionate web developer with expertise in React, Tailwind, and Node.js.</p>
        <div className="mt-4 flex justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white-600 rounded-lg shadow hover:bg-blue-700">
                {btnText}
            </button>
        </div>
    </div>
  )
}

export default Card