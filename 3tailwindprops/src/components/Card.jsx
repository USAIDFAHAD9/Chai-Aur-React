export const Card1 = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">John Doe</h1>
            <h6 className="text-base text-white">Frontend Developer</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Card2 = () => {
  return (
    <div>
      {' '}
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Mark Cook</h1>
            <h6 className="text-base text-white">Backend Developer</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Card3 = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Ketty</h1>
            <h6 className="text-base text-white">Designer</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Cardd = (props) => {
  console.log(props)
  return (
    <div>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Ketty</h1>
            <h6 className="text-base text-white">Designer</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
