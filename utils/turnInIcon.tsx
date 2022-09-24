import reactStringReplace from 'react-string-replace'
import ISymbology from '../interfaces/ISymbology'
import styles from '../styles/turnInIcon.module.css'
import buildSymbology from './buildSymbology'

function trocaTextoPorImagem(text: any, symbol: string, url: string) {
  return reactStringReplace(text, symbol, (match, i) => (
    <img src={url} className={styles.imagem} />
  ))
}

export default function turnInIcon(text: any, symbols: never[]) {
  let newText = text
  let array: ISymbology[] = []

  symbols.map((symbol: any) => {
    const newSymbol = buildSymbology(symbol)
    array.push(newSymbol)
  })

  for (var i = 0; i <= array.length - 1; i++) {
    newText = trocaTextoPorImagem(newText, array[i]?.symbol, array[i]?.url)
  }

  return newText
}
