import React from 'react'

interface Props {
  cardName: string
  setCardName: React.Dispatch<React.SetStateAction<string>>
  searchCards: (name: string, lang: string) => void
  erro: number
}

export default function Form({
  cardName,
  setCardName,
  searchCards,
  erro
}: Props) {
  const [checked, setChecked] = React.useState('en')

  function handleChecked(e: string) {
    setChecked(e)
  }

  return (
    <>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault()
          searchCards(cardName, checked)
        }}
      >
        <input
          type="text"
          className={`input ${
            erro === 400 || erro === 404 ? 'erro-input' : ''
          }`}
          placeholder="search for a card here"
          value={cardName}
          onChange={e => {
            setCardName(e.target.value)
          }}
        />

        <div className="botao-container">
          <button type="submit" className="botao">
            search
          </button>
        </div>

        <div className="radio-container">
          <label className="label">
            <input
              className="radio"
              type="radio"
              value="en"
              checked={checked === 'en'}
              onChange={e => {
                handleChecked(e.target.value)
              }}
            />
            <span className="label-text">Eng</span>
          </label>
          <label className="label">
            <input
              className="radio"
              type="radio"
              value="pt"
              checked={checked === 'pt'}
              onChange={e => {
                handleChecked(e.target.value)
              }}
            />
            <span className="label-text">Port</span>
          </label>
        </div>
      </form>

      <style jsx>{`
        .form {
          display: flex;
          position: relative;
        }

        .input {
          font-family: 'Poppins', sans-serif;
          width: 500px;
          padding: 10px 10px;
          border-radius: 8px 0 0 8px;
          border: 1px solid rgb(21, 11, 0);
          box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
          outline: 0;
        }

        .input::placeholder {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          line-height: 26px;
          color: #979797;
        }

        .erro-input {
          border: 1px solid #ff003e;
        }

        .botao {
          font-family: 'Poppins', sans-serif;
          padding: 10px 10px;
          border-radius: 0 8px 8px 0;
          border: none;
          background: rgb(21, 11, 0);
          color: rgb(249, 250, 244);
          cursor: pointer;
          height: 100%;
          transition: background-color 0.2s;
          position: relative;
        }

        .radio-container {
          font-family: 'Poppins', sans-serif;
          text-transform: lowercase;
          position: absolute;
          bottom: -30px;
          left: 0;
          font-weight: normal;
          padding: 5px;
        }

        .radio {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          display: inline-block;
          width: 12px;
          height: 12px;
          padding: 1px;
          background-clip: content-box;
          border: 2px solid #bbbbbb;
          background-color: #e7e6e7;
          border-radius: 50%;
        }

        .radio:checked {
          background-color: #000;
        }

        .label-text {
          padding: 0 5px;
        }
      `}</style>
    </>
  )
}
