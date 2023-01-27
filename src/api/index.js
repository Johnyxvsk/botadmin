import axios from 'axios'

const baseURL = 'https://taon.tec.br/'

const chartApi = axios.create({
  baseURL: baseURL,
})

export const getMotosData = async () => {
  const res = await chartApi.get('/motos')

  return res.data
}