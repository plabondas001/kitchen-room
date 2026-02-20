import { Suspense } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Heading from './Components/Heading/Heading'
import Navbar from './Components/Navbar/Navbar'
import OrderContainer from './Components/OrderContainer/OrderContainer'
import { ChefHat } from 'lucide-react'

const fetchOrder = async () => {
  const res = await fetch("/orders.json")
  return res.json()
}
function App() {

  const promiseOrder = fetchOrder()

  return (
   <div>
    <header>
      <Navbar></Navbar>
    </header>
    <section>
     <Heading> <ChefHat size={60} /> Kitchen Room</Heading>
    </section>
    <section>
      <Suspense fallback = {<h1 className='font-bold text-4xl text-yellow-400 text-center'>Loading...⏳</h1>}>
        <OrderContainer promise = {promiseOrder}></OrderContainer>
      </Suspense>
    </section>
   </div>
  )
}

export default App
