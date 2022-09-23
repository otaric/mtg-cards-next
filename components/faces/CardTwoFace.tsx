import ICard from '../../interfaces/ICard'
import brake from '../../utils/brake'

interface Props {
  data: ICard
}

export default function CardTwoFace({ data }: Props) {
  const textBrakeFaceOne = brake(data.card_faces[0].oracle_text)
  const textBrakeFaceTwo = brake(data.card_faces[1].oracle_text)

  return (
    <>
      {/* Face 1 */}
      <div className="card-container face-1">
        <div className="img-container">
          <img
            src={data.card_faces[0]?.image_uris.normal}
            alt={data.card_faces[0].name}
            className="card-img"
          />
        </div>
        <div className="info-container">
          <h2 className="card-name">{data.card_faces[0].name}</h2>
          <p>{data.card_faces[0].type_line}</p>

          {textBrakeFaceOne.map(frase => {
            return <p key={frase}>{frase}</p>
          })}

          <br />
          {data.card_faces[0].type_line?.indexOf('Creature') != -1 ? (
            <p className="pow-toug stats">
              {`${data.card_faces[0].power} / ${data.card_faces[0].toughness}`}
            </p>
          ) : null}

          {data.card_faces[0].type_line?.indexOf('Planeswalker') != -1 ? (
            <p className="loyalty stats">{`${data.loyalty}`}</p>
          ) : null}
        </div>
      </div>

      {/* Face 2 */}
      <div className="card-container">
        <div className="info-container">
          <h2 className="card-name">{data.card_faces[1].name}</h2>
          <p>{data.card_faces[1].type_line}</p>

          {textBrakeFaceTwo.map(frase => {
            return <p key={frase}>{frase}</p>
          })}

          <br />
          {data.card_faces[1].type_line?.indexOf('Creature') != -1 ? (
            <p className="pow-toug">
              {`${data.card_faces[1].power} / ${data.card_faces[0].toughness}`}
            </p>
          ) : null}

          {data.card_faces[1].type_line?.indexOf('Planeswalker') != -1 ? (
            <p className="loyalty">{`${data.card_faces[1].loyalty}`}</p>
          ) : null}
        </div>

        <div className="img-container">
          <img
            src={data.card_faces[1]?.image_uris.normal}
            alt={data.card_faces[1].name}
            className="card-img"
          />
        </div>
      </div>

      <style jsx>{`
        .card-container {
          font-family: 'Poppins', sans-serif;

          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          height: min-content;
          gap: 100px;
        }

        .face-1 {
          margin-top: 80px;
        }

        .card-img {
          height: 400px;
        }

        .info-container {
          display: flex;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
          max-width: 400px;
        }

        .stats {
          text-align: end;
        }
      `}</style>
    </>
  )
}
