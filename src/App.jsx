import iconStar from "./images/icon-star.svg"
import illustrationThankYou from "./images/illustration-thank-you.svg"
import { useState } from "react"

export function App() {
  const [notaAvalicao, setNotaAvaliacao] = useState (0)
  const [submited, setSubmited] = useState(false)

  function handleMudarNotaAvalicao(nota) {
    setNotaAvaliacao(nota)
  }

  function handleSubmit() {
    if(notaAvalicao !==0) {
      setSubmited(true)
      return
    }

    alert("Please, choose a note!")
  }

  return (
    submited === false ? (
      <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass">
        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
          <img src={iconStar} alt="icon star" />
        </div>

        <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>

        <p className="text-light-gray text-sm leading-1  mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>


        <div className="flex justify-between mb-6">
          <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleMudarNotaAvalicao (1)}/>
          <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleMudarNotaAvalicao (2)}/>
          <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleMudarNotaAvalicao (3)}/>
          <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleMudarNotaAvalicao (4)}/>
          <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleMudarNotaAvalicao (5)}/>
        </div>

        <button  onClick={handleSubmit} className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3">Submit</button>
      </div>
    ) : (
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass">
      
      <img className="mx-auto mb-6" src={illustrationThankYou} alt="illustration thank you" />

      <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6">You select {notaAvalicao} out of 5</p>

      <h1 className="text-2xl font-bold mb-2.5 text-center">Thank you!</h1>
      <p className="text-sm text-light-grey leading-1 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    
      </div>
    )
  )
}