import iconStar from "./images/icon-star.svg"
import { useState } from "react"

export function App() {
  const [submited, setSubmit] = useState(false)
  const [rateNote, setRateNote] = useState (0)
 
  
  function handleSubmit() {
    if (rateNote !==0) {
      setSubmit(true)
      return
    }

    alert("Plase, choose a rate button!")
  }

  function handleChangeRateNote(value) {
    setRateNote(value)
  }

  function handleAlterarNotaAvaliacao(nota) {
    setNotaAvaliacao(nota)

    console.log(nota)
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
          <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:text-white" onClick={() => handleChangeRateNote (1)}/>
          <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:text-white" onClick={() => handleChangeRateNote (2)}/>
          <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:text-white" onClick={() => handleChangeRateNote (3)}/>
          <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:text-white" onClick={() => handleChangeRateNote (4)}/>
          <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:text-white" onClick={() => handleChangeRateNote (5)}/>
        </div>

        <button className="bg-orange w-full py-3 uppercase text-sm rounded-3xl font-bold tracking-1" onClick={handleSubmit}>Submit</button>
      </div>
    ) : (
      <p>asdasd</p>
    )
  )
}