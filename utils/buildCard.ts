import type ICard from '../interfaces/ICard'

export default function buildCard(dadosCard: any): ICard {
  return {
    id: dadosCard.id,
    card_name: dadosCard.name,
    card_name_tr: dadosCard.printed_name,
    description: dadosCard.oracle_text,
    description_tr: dadosCard.printed_text,
    keywords: dadosCard.keywords,
    formats: dadosCard.legalities,
    scryfall_url: dadosCard.scryfall_uri,
    mana_cost: dadosCard.mana_cost,
    cmc: dadosCard.cmc,
    colors: dadosCard.colors,
    color_identity: dadosCard.color_identity,
    type_line: dadosCard.type_line,
    type_line_tr: dadosCard.printed_type_line,
    power: dadosCard.power,
    toughness: dadosCard.toughness,
    art_normal: dadosCard.image_uris?.normal
  }
}
