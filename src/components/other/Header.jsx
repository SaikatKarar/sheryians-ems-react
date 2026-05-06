import React from 'react'

function Header() {
    return (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-lg text-gray-400">Hello,</h2>
                <h1 className="text-3xl font-bold">Sarthak 👋</h1>
            </div>

            <button className="bg-red-500 px-4 py-2 rounded-lg">
                Log Out
            </button>
        </div>
    )
}

export default Header