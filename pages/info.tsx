import React from 'react'
import { useRouter } from 'next/router'
import buildCard from '../utils/buildCard'
import type ICard from '../interfaces/ICard'
import CardTwoFace from '../components/faces/CardTwoFace'
import CardOneFace from '../components/faces/CardOneFace'
import Loading from '../components/Loading'

export default function Info() {
  const router = useRouter()
  const idCard = router.query.id
  const [data, setData]: [
    ICard | undefined,
    React.Dispatch<React.SetStateAction<ICard | undefined>>
  ] = React.useState()
  const [isLoading, setLoading] = React.useState(false)
  const [symbology, setSymbology] = React.useState([])

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://api.scryfall.com/symbology`)
      .then(res => res.json())
      .then(data => {
        setSymbology(data.data)
      })
  }, [])

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://api.scryfall.com/cards/${idCard}`)
      .then(res => res.json())
      .then(data => {
        const card = buildCard(data)
        setData(card)
        setLoading(false)
      })
  }, [idCard])

  if (isLoading) return <Loading />
  if (!data) return <Loading />
  return data.card_faces === undefined ? (
    <CardOneFace data={data} symbology={symbology} />
  ) : (
    <CardTwoFace data={data} symbology={symbology} />
  )
}
