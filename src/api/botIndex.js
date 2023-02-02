import axios from 'axios'

const baseURL = 'http://localhost:4000'

const botApi = axios.create({
  baseURL: baseURL,
})

export const setVinculo = async () => {
  const res = await botApi.post("/bot", {
    type: `remove`,
    id: 678414,
  });
  console.log(res.data);
  return res.data;
};

export const pausePlay = async (selectType) => {
  const res = await botApi.post("/botPause", {
    type: selectType,
  });
  console.log(res.data);
  return res.data;
};

export const checkStatus = async () => {
  const res = await botApi.post("/botCheckStatus", {
    type: "checkStatus",
  });
  console.log(res.data);
  return res.data;
};
