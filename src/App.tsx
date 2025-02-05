import { useState } from "react"
const App = () => {

  const [cookies, setCookies] = useState(0)

  return (
    <div className="w-screen h-screen flex">

      <div className="flex-1 flex justify-center items-center">
        <p>Total cookies : {cookies}</p>
        <img
          onClick={() => { setCookies(cookies + 1) }}
          className="h-100" src="https://sweetlorens.com/cdn/shop/products/Copy-of-Chocolate-Chunk-Full-Cookie-transparent-background.png" alt="cookie-logo" />
      </div>

      <div className="flex-1 bg-red-200">items</div>
      <div className="flex-1 bg-yellow-200">shop</div>

    </div>
  )
}

export default App