import ICard from '../interfaces/ICard'

import Image from 'next/image'

interface Props {
  cardType: ICard
}

export default function Card({ cardType }: Props) {
  return (
    <>
      <div className="card">
        <div>
          <img className="image" src={cardType.art_normal} alt="logo" />
        </div>
        <div className="card-info">
          <h2 className="card-name">{cardType.card_name}</h2>
        </div>
      </div>

      <style jsx>{`
        .card {
          max-width: 600px;
          display: flex;
          padding: 20px;
          background-color: #fff;
          margin: 0;
          border-radius: 10px;
          box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .image {
          max-width: 200px;
          border-radius: 10px;
        }

        .card-name {
          font-family: 'Poppins', sans-serif;
          max-width: 100px;
          padding-left: 10px;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}
