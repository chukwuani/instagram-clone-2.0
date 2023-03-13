"use client"
import { useEffect, useState } from "react"
import Homepage from "./Components/Homepage"
import Loader from "./Components/Loader"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(!loading)
  }, [])
  
  return (
    <main>
      {loading ? <Loader /> : <Homepage />}
    </main>
  )
}
