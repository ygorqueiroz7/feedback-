import { useState } from "react"
import { Cardinicial } from "./components/CardInicial" 
import { CardFinal } from "./components/CardFinal"


export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

return (
  submited === false ? (
    <Cardinicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited} />
    ) : (
      <CardFinal notaAvaliacao={notaAvaliacao} />
    )
  )
}