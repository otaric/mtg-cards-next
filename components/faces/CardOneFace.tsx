import ICard from '../../interfaces/ICard'
import brake from '../../utils/brake'

interface Props {
  data: ICard
}

export default function CardOneFace({ data }: Props) {
  const textBrake =
    data.description_tr === undefined
      ? brake(data.description)
      : brake(data.description_tr)
      
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img
            src={data.art?.normal}
            alt={data.card_name}
            className="card-img"
          />
        </div>
        <div className="info-container">
          <h2 className="card-name">
            {data.card_name_tr === undefined
              ? `${data.card_name}`
              : `${data.card_name_tr}`}
          </h2>

          <p>{data.type_line}</p>
          {textBrake.map(frase => {
            return <p key={frase}>{frase}</p>
          })}

          <br />
          {data.type_line?.indexOf('Creature') != -1 ? (
            <p className="pow-toug stats">
              {`${data.power} / ${data.toughness}`}
            </p>
          ) : null}

          {data.type_line?.indexOf('Planeswalker') != -1 ? (
            <p className="loyalty stats">{`${data.loyalty}`}</p>
          ) : null}
        </div>
      </div>

      <style jsx>{`
        .card-container {
          font-family: 'Poppins', sans-serif;
          margin-top: 80px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          height: min-content;
          gap: 100px;
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
