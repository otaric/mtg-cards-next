import ICard from '../interfaces/ICard'
import { useRouter } from 'next/router'

interface Props {
  cardType: ICard
}

export default function Card({ cardType }: Props) {
  const router = useRouter()
  return (
    <>
      <div className="card">
        <div
          className="img-container"
          onClick={() => router.push(`/info?id=${cardType.id}`)}
        >
          <img
            className="image"
            src={
              cardType.card_faces === undefined
                ? `${cardType.art?.normal}`
                : `${cardType.card_faces[0]?.image_uris?.normal}`
            }
            alt="logo"
          />
        </div>
        <div className="card-info">
          <h2 className="card-name">
            {cardType.card_name_tr === undefined
              ? `${cardType.card_name}`
              : `${cardType.card_name_tr}`}
          </h2>
        </div>
      </div>

      <style jsx>{`
        .card {
          width: 400px;
          display: flex;
          padding: 20px;
          background-color: #fff;
          margin: 0;
          border-radius: 10px;
          box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .image {
          width: 200px;
          border-radius: 10px;
          cursor: pointer;
        }

        .card-name {
          font-family: 'Poppins', sans-serif;
          max-width: 150px;
          padding-left: 10px;
          font-weight: 700;
        }

        @media screen and (max-width: 400px) {
          .card {
            width: 300px;
            justify-conent: center;
            align-items: center;
            gap: 10px;
            flex-direction: column-reverse;
          }

          .image {
            width: 180px;
          }
        }
      `}</style>
    </>
  )
}
