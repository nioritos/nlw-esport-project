import Game01 from '../../public/image1.png';
import Game02 from '../../public/image2.png';
import Game03 from '../../public/image3.png';
import Game04 from '../../public/image4.png';
import Game05 from '../../public/image5.png';
import Game06 from '../../public/image6.png';
import { HiChevronLeft } from 'react-icons/hi2';
import { HiChevronRight } from 'react-icons/hi2';

export default function GamesRow() {
    return (
        <div className="flex mt-12 h-[40%] w-[97%]">

            <ul className='flex flex-wrap gap-4 '>
                <HiChevronLeft size="36" color='#fff' className='mt-[8%] hover:cursor-pointer hover:opacity-70 hover:duration-400' />
                <li className=''>
                    <img src={Game01} alt="" className='absolute' />
                    <div className="about-game relative top-40 bg-[rgba(0,0,0,0.6)] w-[11.3rem] h-20 rounded-b-lg flex flex-col justify-center">
                        <h2 className='font-medium text-white mx-4'>League of Legends</h2>
                        <p className='text-gray-400 opacity-0.8 font-light mx-4'>4 anúncios</p>
                    </div>
                </li>
                <li className=''>
                    <img src={Game02} alt="" className='absolute' />
                    <div className="about-game relative top-40 bg-[rgba(0,0,0,0.6)] w-[11.3rem] h-20 rounded-b-lg flex flex-col justify-center">
                        <h2 className='font-medium text-white mx-4'>Dota 2</h2>
                        <p className='text-gray-400 opacity-0.8 font-light mx-4'>4 anúncios</p>
                    </div>
                </li>
                <li className=''>
                    <img src={Game03} alt="" className='absolute' />
                    <div className="about-game relative top-40 bg-[rgba(0,0,0,0.7)] w-[11.3rem] h-20 rounded-b-lg flex flex-col justify-center">
                        <h2 className='font-medium text-white mx-4'>Counter Strike</h2>
                        <p className='text-gray-400 opacity-0.8 font-light mx-4'>4 anúncios</p>
                    </div>
                </li>
                <li className=''>
                    <img src={Game04} alt="" className='absolute' />
                    <div className="about-game relative top-40 bg-[rgba(0,0,0,0.6)] w-[11.3rem] h-20 rounded-b-lg flex flex-col justify-center">
                        <h2 className='font-medium text-white mx-4'>World War Craft</h2>
                        <p className='text-gray-400 opacity-0.8 font-light mx-4'>4 anúncios</p>
                    </div>
                </li>
                <li className=''>
                    <img src={Game05} alt="" className='absolute' />
                    <div className="about-game relative top-40 bg-[rgba(0,0,0,0.6)] w-[11.3rem] h-20 rounded-b-lg flex flex-col justify-center">
                        <h2 className='font-medium text-white mx-4'>Apex Legends</h2>
                        <p className='text-gray-400 opacity-0.8 font-light mx-4'>4 anúncios</p>
                    </div>
                </li>
                <li className=''>
                    <img src={Game06} alt="" className='absolute' />
                    <div className="about-game relative top-40 bg-[rgba(0,0,0,0.6)] w-[11.3rem] h-20 rounded-b-lg flex flex-col justify-center">
                        <h2 className='font-medium text-white mx-4'>Fortnite</h2>
                        <p className='text-gray-400 opacity-0.8 font-light mx-4'>4 anúncios</p>
                    </div>
                </li>
                <HiChevronRight size="36" color='#fff' className='mt-[8%] hover:cursor-pointer hover:opacity-70 hover:duration-400' />
            </ul>
        </div>
    )
}