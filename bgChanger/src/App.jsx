import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify center gap-6 shadow-lg bg-white px-3 py-2 rounded-xl font-black text-white">
          <button
            className="outline-none px-4 py-1 rounded-2xl"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl"
            style={{ backgroundColor: 'purple' }}
            onClick={() => setColor('purple')}
          >
            purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl"
            style={{ backgroundColor: 'gray' }}
            onClick={() => setColor('gray')}
          >
            gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl"
            style={{ backgroundColor: 'pink' }}
            onClick={() => setColor('pink')}
          >
            pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-2xl"
            style={{ backgroundColor: 'orange' }}
            onClick={() => setColor('orange')}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
