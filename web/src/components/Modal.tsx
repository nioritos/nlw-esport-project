

export default function Modal() {
    return (
        <div className={'modal hidden w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center  z-[9999]'}>
            <div className="content-modal p-12 w-[40vw] h-[90vh] rounded-lg bg-[#2A2634] flex flex-col">
                <h1 className="text-white font-bold text-3xl">Publique um anúncio</h1>
                <form action="submit" className="form-area w-full h-full flex flex-col items-center ">
                    <div className="one-area w-full  mt-5 ">
                        <label htmlFor="game-select">
                            <h2 className="text-white text-lg mb-2">Qual o game?</h2>
                        </label>
                        <select name="" id="select-game" className="bg-zinc-900 w-full h-12 text-zinc-400 mb-4">
                            <option value="disable" >Selecione o game que deseja jogar</option>
                            <option value="" className="text-white">League of Legends</option>
                            <option value="" className="text-white">Dota 02</option>
                            <option value="" className="text-white">Counter Strike</option>
                            <option value="" className="text-white">World War Craft</option>
                            <option value="" className="text-white">Apex Legends</option>
                            <option value="" className="text-white">Fortnite</option>
                        </select>

                        <label htmlFor="type-user">
                            <h2 className="text-white text-lg mb-2">Qual é o seu nickname?</h2>
                        </label>
                        <input type="text" name="" id="type-user" placeholder="Como te chama dentro do game?" className="bg-zinc-900 w-full h-12 text-zinc-400" />
                    </div>

                    <span className="flex justify-between mt-5">
                        <div className="one-area">
                            <label htmlFor="yrs-game">
                                <h2 className="text-white text-md mb-2">Joga há quantos anos?</h2>
                            </label>

                            <input type="number" name="" id="yrs-game" className="bg-zinc-900 w-[90%] h-12 text-zinc-400" placeholder="Tudo bem ser ZERO" />
                        </div>
                        <div className="one-area">
                            <label htmlFor="discord-user">
                                <h2 className="text-white text-md mb-2">Seu usuário do Discord?</h2>
                            </label>

                            <input type="text" name="" id="discord-user" className="bg-zinc-900 text-zinc-400 w-[90%] h-12" placeholder="user#0000" />
                        </div>
                    </span>

                    <span className="flex ">
                        <div className="days-area flex flex-col">
                            <h2 className="text">Quando custuma jogar?</h2>
                            <div className="days-area flex gap-2">
                                <button className="bg-zinc-700 p-4">S</button>
                                <button className="bg-zinc-700 p-4">T</button>
                                <button className="bg-zinc-700 p-4">Q</button>
                                <button className="bg-zinc-700 p-4">Q</button>
                                <button className="bg-zinc-700 p-4">S</button>
                            </div>
                        </div>

                        <div className="hours-areas flex gap-6">

                            <input type="number" name="" id="from-h" placeholder="De" className="w-[40%]" />
                            <input type="number" name="" id="from-h" placeholder="Até" className="w-[40%]" />
                        </div>
                    </span>
                </form>
            </div>
        </div>
    )
}