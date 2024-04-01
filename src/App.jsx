import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TestComponent from './components/TestComponent'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <TestComponent />
        </>
    )
}

export default App
