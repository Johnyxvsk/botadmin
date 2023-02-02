import { useState, useEffect } from 'react'
import reactLogo from './assets/taonLogo.png'
import './App.scss'
import UsersList from './comps/UsersList'

import { useQuery, useMutation } from 'react-query'

import { getMotosData } from './api'
import { setVinculo, pausePlay, checkStatus } from "./api/botIndex";

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
            <button onClick={checkStatus}>checkStatus</button>
          </div>
          <div className="pausas">
            <div>
              <button
                style={{ backgroundColor: "#b90d0d" }}
                onClick={() => pausePlay("pausaComp")}
              >
                Pausa Completa
              </button>
              <button
                style={{ backgroundColor: "yellow" }}
                onClick={() => pausePlay("pausaParc")}
              >
                Pausa Parcial
              </button>
            </div>
            <div>
              <button
                style={{ backgroundColor: "blue" }}
                onClick={() => pausePlay("playSemDinamica")}
              >
                Play Sem Dinamica
              </button>
              <button
                style={{ backgroundColor: "green" }}
                onClick={() => pausePlay("playDinamica")}
              >
                Play Com Dinamica
              </button>
            </div>
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
