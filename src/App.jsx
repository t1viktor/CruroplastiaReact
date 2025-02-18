import './App.css'
import Cuidados from './components/Cuidados'
import Footer from './components/Footer'
import Header from './components/Header'
import Procedimento from './components/Procedimento'
import Resultados from './components/Resultados'


function App() {

  return (
    <div className='bg-gray-800 fontInter flex flex-col'>
      <Header />
      <Procedimento />
      <Cuidados />
      <Resultados />
      <Footer />
    </div>
  )
}

export default App
