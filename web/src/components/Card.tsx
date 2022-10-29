import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import Modal from "./Modal";

export default function Card() {
  return (
    <div className="card w-[70%] mt-36 mb-10 relative">
      <div className="bg-white w-full h-2  rounded-t-lg"></div>
      <div className=" w-full h-28 bg-[#2A2634] flex justify-around items-center rounded-b-md">
        <div className="text-card">
          <h2 className="font-bold text-2xl text-white">Não encontrou seu duo?</h2>
          <p className="font-extralight text-base text-gray-400">Publique seu anúncio para encontrar novos players!</p>
        </div>

        <button className="bg-violet-700 hover:bg-violet-500 hover:duration-600 text-white flex gap-2 p-4 rounded-lg">
          <HiMagnifyingGlassPlus size="24" />
          Publicar anúncio
        </button>
      </div>
    </div>
  )
};