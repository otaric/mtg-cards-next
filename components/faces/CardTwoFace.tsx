import ICard from '../../interfaces/ICard'
import brake from '../../utils/brake'
import turnInIcon from '../../utils/turnInIcon'

interface Props {
  data: ICard
  symbology: never[]
}

export default function CardTwoFace({ data, symbology }: Props) {
  const textBrakeFaceOne = brake(data.card_faces[0].oracle_text)
  const textBrakeFaceTwo = brake(data.card_faces[1].oracle_text)

  /*  const textBrakeFaceOne =
    data.card_faces[0].printed_text === undefined
      ? brake(data.card_faces[0].oracle_text)
      : brake(data.card_faces[0].printed_text)

  const textBrakeFaceTwo =
    data.card_faces[1].printed_text === undefined
      ? brake(data.card_faces[1].oracle_text)
      : brake(data.card_faces[1].printed_text) */

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

          {textBrakeFaceOne?.map(frase => {
            const fraseWithIcons = turnInIcon(frase, symbology)
            return (
              <div className="description" key={Math.random()}>
                <p>{fraseWithIcons}</p>
              </div>
            )
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

          {textBrakeFaceTwo?.map(frase => {
            const fraseWithIcons = turnInIcon(frase, symbology)
            return (
              <div className="description" key={Math.random()}>
                <p>{fraseWithIcons}</p>
              </div>
            )
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
