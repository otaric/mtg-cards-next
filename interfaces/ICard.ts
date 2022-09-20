export default interface ICard {
  id: string
  card_name: string
  card_name_tr: string
  description: string
  description_tr: string
  keywords: Array<string>
  formats: object
  scryfall_url: string
  mana_cost: string
  cmc: number
  colors: Array<string>
  color_identity: Array<string>
  type_line: string
  type_line_tr: string
  power: string
  toughness: string
  art_normal: string
}
