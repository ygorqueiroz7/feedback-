import iconStar from "../images/icon-star.svg"
import { InputButton } from "./InputButton"

export function CardInicial({ setNotaAvaliacao, notaAvalicao, setSubmited }) {
  function handleSubmit() {
    if(notaAvalicao !==0) {
      setSubmited(true)
      return
    }

    alert("Please, choose a note!")
  }

    return (
        <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass max-w-103">
        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
          <img src={iconStar} alt="icon star" />
        </div>

        <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>

        <p className="text-light-gray text-sm leading-1  mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>


        <div className="flex justify-between mb-6">
         <InputButton value={1} setNotaAvaliacao={setNotaAvaliacao}/>
         <InputButton value={2} setNotaAvaliacao={setNotaAvaliacao}/>
         <InputButton value={3} setNotaAvaliacao={setNotaAvaliacao}/>
         <InputButton value={4} setNotaAvaliacao={setNotaAvaliacao}/>
         <InputButton value={5} setNotaAvaliacao={setNotaAvaliacao}/>
        </div>

        <button  onClick={handleSubmit} className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3 hover:bg-white hover:text-orange hover:cursor-pointer">Submit</button>
      </div>
    )
}