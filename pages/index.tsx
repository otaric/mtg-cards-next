import React from 'react'
import Form from '../components/Form'
import Card from '../components/Card'
import buildCard from '../utils/buildCard'
import Head from 'next/head'

export default function HomePage() {
  const [cardName, setCardName] = React.useState('')
  const [cardList, setCardList] = React.useState([])
  const [erro, setErro] = React.useState(-1)

  function cardMTG(name: string, lang: string) {
    return fetch(
      `https://api.scryfall.com/cards/search?order=name&q=${name} lang:${lang}`
    )
  }

  async function searchCards(name: string, lang: string) {
    const resposta = await cardMTG(name, lang)

    if (resposta.ok) {
      const dadoCard = await resposta.json()

      setErro(resposta.status)
      setCardList(dadoCard.data)
    } else {
      setErro(resposta.status)
    }
  }

  return (
    <>
      <Head>
        <title>MTG CARDS NEXT</title>
        <link rel="shortcut icon" href="/images/logo.svg" />
      </Head>
      <div className="app">
        <div className="container">
          <h1 className="titulo">Search MTG cards!</h1>
          <div className="form-container">
            <Form
              cardName={cardName}
              setCardName={setCardName}
              searchCards={searchCards}
              erro={erro}
            />
          </div>
        </div>

        {erro === 400 || erro === 404 ? (
          <div className="erro">
            <h2>Card not found </h2>
          </div>
        ) : (
          <div className="cards-container">
            {cardList.map(card => {
              const cardType = buildCard(card)
              return (
                <div key={cardType.id}>
                  <Card cardType={cardType} />
                </div>
              )
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        .app {
          margin: 0 auto;
          max-width: 1440px;
        }

        .container {
          padding-top: 50px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
        }

        .titulo {
          font-family: 'Bungee', cursive;
          color: rgb(21, 11, 0);
          font-size: 2rem;
          text-transform: uppercase;
        }

        .cards-container {
          gap: 2rem;
          padding: 100px 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        .erro {
          font-family: 'Poppins', sans-serif;
          padding-top: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff003e;
        }
      `}</style>
    </>
  )
}
