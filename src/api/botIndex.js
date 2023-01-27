import axios from 'axios'

const baseURL = 'http://localhost:4000'

const botApi = axios.create({
  baseURL: baseURL,
})

export const setVinculo = async () => {

  const res = await botApi.post('/bot', { 
    "possui_vinculo": true,
    "vinculo": "T"
  })
    console.log(res.data.response)
  return res.data
}


