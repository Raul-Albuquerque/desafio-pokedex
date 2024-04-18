import axios from 'axios'

const getPokemons2 = async (limit, offset) => {
  const pokemons = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  )

  return pokemons.data.results
}

export default getPokemons2