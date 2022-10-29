import './index.css';
import Logo from '../public/Logo.png';
import Card from './components/Card';
import GamesRow from './components/GamesRow';
import Modal from './components/Modal';

export default function App() {
  return (
    <div className="app bg-[url('../public/Fundo.png')] bg-cover bg-no-repeat w-screen h-screen absolute">
      <Modal/>
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={Logo} alt="Logo da NLW Ignite" />
        <h1 className='text-6xl font-black text-white mt-4'>Seu <strong> duo </strong> está aqui.</h1>
        <GamesRow />
        <Card/>
      </div>
    </div>
  )
}



