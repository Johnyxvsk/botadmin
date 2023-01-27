import { useState, useEffect } from 'react'
import reactLogo from './assets/taonLogo.png'
import './App.scss'
import UsersList from './comps/UsersList'

import { useQuery } from 'react-query'
import { getMotosData } from './api'

function App() {
  const motoData = useQuery('motos', getMotosData, {
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
  })

useEffect(() => {
console.log(motoData.isFetching)
}, [motoData.isFetching])

  
  return (
    <div className="App">
      <div>
        <a href="https://taon.tec.br/home" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="content">

      <div className="options">
        
      </div>
      {motoData.isSuccess && 
      <UsersList bikerData={motoData?.data?.motos} isFetching={ motoData.isFetching} />
      }
      </div>
      
    </div>
  )
}

export default App
