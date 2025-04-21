import { useState } from "react"
import illustrationThankYou from "./images/illustration-thank-you.svg"
import { CardInicial } from "./components/CardInicial"


export function App() {
  const [notaAvalicao, setNotaAvaliacao] = useState (0)
  const [submited, setSubmited] = useState(false)

  return (
    submited === false ? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvalicao={notaAvalicao} setSubmited={setSubmited}/>
    ) : (
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
      
      <img className="mx-auto mb-6" src={illustrationThankYou} alt="illustration thank you" />

      <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6">You select {notaAvalicao} out of 5</p>

      <h1 className="text-2xl font-bold mb-2.5 text-center">Thank you!</h1>
      <p className="text-sm text-light-grey leading-1 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    
      </div>
    )
  )
}