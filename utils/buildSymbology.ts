import type ISymbology from '../interfaces/ISymbology'

export default function buildSymbology(symbology: any): ISymbology {
  return {
    symbol: symbology.symbol,
    url: symbology.svg_uri
  }
}
