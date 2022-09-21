import React from 'react'
import { useRouter } from 'next/router'
import buildCard from '../utils/buildCard'
import type ICard from '../interfaces/ICard'
import CardTwoFace from '../components/faces/CardTwoFace'
import CardOneFace from '../components/faces/CardOneFace'

export default function Info() {
  const router = useRouter()
  const idCard = router.query.id

  const [data, setData]: [
    ICard | undefined,
    React.Dispatch<React.SetStateAction<ICard | undefined>>
  ] = React.useState()
  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://api.scryfall.com/cards/${idCard}`)
      .then(res => res.json())
      .then(data => {
        const card = buildCard(data)
        console.log(card)
        setData(card)
        setLoading(false)
      })
  }, [idCard])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return data.card_faces === undefined ? (
    <CardOneFace data={data} />
  ) : (
    <>
      <CardTwoFace data={data} />
    </>
  )
}
