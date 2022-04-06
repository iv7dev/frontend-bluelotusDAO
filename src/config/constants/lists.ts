const PANCAKE_EXTENDED = 'https://tokens.genesys.network/pancakeswap-extended.json'
const PANCAKE_TOP100 = 'https://tokens.genesys.network/pancakeswap-top-100.json'
const COINGECKO = 'https://tokens.genesys.network/coingecko.json'
const CMC = 'https://tokens.genesys.network/cmc.json'

// List of official tokens list
export const OFFICIAL_LISTS = [PANCAKE_EXTENDED, PANCAKE_TOP100]

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  CMC,
  COINGECKO,
  PANCAKE_TOP100,
  PANCAKE_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
