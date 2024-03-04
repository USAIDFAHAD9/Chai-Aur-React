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
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char) //chech logic ***************8
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback ( () =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15)// selects only the given range
    window.navigator.clipboard.writeText(password)} , [password])

  useEffect( ()=> {
passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  
  return (
    <div className="flex flex-col text-center bg-black w-full h-screen  items-center">
      <div className=" bg- pt-2 w-2/3 mt-20 rounded-xl bg-rose-200 shadow-rose-200 pb-10 ">
        <h1 className="text-3xl font-bold mt-10 mb-4 ">Password Generator</h1>
        <hr />
        <div className="flex mt-5">
          <input
            type="text"
            value={password}
            className=" bg-white border hover:border hover:border-rose-700 rounded-xl my-5 py-3 px-2 text-xl w-72 mx-auto"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className=" mr-auto bg-blue-600 border hover:bg-blue-500  rounded-xl my-5 py-3 px-2 text-md w-20 text-white"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-md gap-x-4 mx-3 mt-1">
          <div className="flex items-center gap-x-2">
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
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
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
