import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaisCard from '../src/paisCard';
import Busca from '../src/busca';
import './App.css';

function App() {
  const [paises, setPaises] = useState([]);
  const [busca, setBusca] = useState('');

  const buscarPaises = async () => {
    try {
      const resposta = await axios.get('https://restcountries.com/v3.1/all');
      setPaises(resposta.data); 
    } catch (erro) {
      console.error('Erro ao buscar países:', erro);
      setPaises([]); 
    }
  };

  useEffect(() => {
    buscarPaises();
  }, []);

  const paisesFiltrados = paises
    .filter(pais =>
      pais.name.common.toLowerCase().includes(busca.toLowerCase())
    )
    .slice(0, 10);

  return (
    <div className="container">
      <h1>🌍 Atlas Interativo</h1>
      <Busca onBuscar={setBusca} />
      <div className="paises">
        {paisesFiltrados.map((pais, index) => (
          <PaisCard
            key={index}
            nome={pais.name.common}
            capital={pais.capital?.[0] || 'N/A'}
            continente={pais.region}
            populacao={pais.population}
            bandeira={pais.flags.png}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
