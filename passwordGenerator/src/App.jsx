import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('password')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*|/~-_=+{}[]()'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 15)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
        <hr className="mb-4" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            value={password}
            className="bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 text-lg w-full md:w-auto"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-3 px-6 text-lg"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App