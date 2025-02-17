import { useState } from 'react'
import './App.css'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>

            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    +1
                </button>
                <button onClick={() => setCount((count) => count - 1)}>
                    -1
                </button>
                <p>
                    count is {count}
                </p>
            </div>

        </>
    )
}

export default Counter
