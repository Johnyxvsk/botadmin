import { useState, useEffect } from 'react'
import reactLogo from './assets/taonLogo.png'
import './App.scss'
import UsersList from './comps/UsersList'

import { useQuery, useMutation } from 'react-query'

import { getMotosData } from './api'
import { setVinculo, pausePlay } from "./api/botIndex";

function App() {
  const motoData = useQuery("motos", getMotosData, {
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
  });

  const test = () => {
    console.log(setVinc.data);
  };

  return (
    <div className="App">
      <div>
        <a href="https://taon.tec.br/home" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="content">
        <div className="options">
          <div className="optItem">
            <button onClick={setVinculo}>Alterar Vinculos</button>
          </div>
          <div className="optItem">
            <button onClick={setVinculo}>Aumentar/Diminuir Dinamica</button>
          </div>
          <div className="optItem">
            <button onClick={() => pausePlay("pausar")}>Pausar</button>
            <button onClick={() => pausePlay("playSemDinamica")}>
              Play Sem Dinamica
            </button>
          </div>

          {motoData.isLoading && (
            <i className="material-icons-outlined loading">refresh</i>
          )}
        </div>
        {motoData.isSuccess && (
          <UsersList bikerData={!motoData.isFetching && motoData} />
        )}
      </div>
    </div>
  );
}

export default App
