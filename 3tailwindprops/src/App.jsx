// import { Card1 } from './components/Card'
// import { Card2 } from './components/Card'
// import { Card3 } from './components/Card'
import { Cardd } from './components/Card'

function App() {
  return (
    <div className="bg-gray-800 h-full w-full">
      <div className="mx-auto max-w-7xl px-2 md:px-0">
        <div className="my-4">
          <h1 className="text-3xl font-bold">Our Team</h1>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">

          <Cardd />
        </div>
      </div>
    </div>
  )
}

export default App
