import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaisCard from '../src/paisCard';
import Busca from '../src/busca';
import './App.css';

function App() {  // Estado para armazenar todos os países retornados pela API
  const [paises, setPaises] = useState([]);
  const [busca, setBusca] = useState('');   // Estado para armazenar o texto digitado na barra de busca

  // Função assíncrona para buscar os dados dos países na API

  const buscarPaises = async () => {
    try {       // Faz a requisição GET à API dos países

      const resposta = await axios.get('https://restcountries.com/v3.1/all');

            // Armazena os dados retornados no estado 'paises'
      setPaises(resposta.data); 
    } catch (erro) {

            // Em caso de erro, exibe mensagem no console e limpa a lista
      console.error('Erro ao buscar países:', erro);
      setPaises([]); 
    }
  };

  // Hook useEffect que chama a função buscarPaises apenas uma vez ao montar o componente
  useEffect(() => {
    buscarPaises();
  }, []);

 // Filtra os países com base no texto digitado na busca (ignora maiúsculas/minúsculas)
  // Depois limita os resultados aos 10 primeiros
  const paisesFiltrados = paises
    .filter(pais =>
      pais.name.common.toLowerCase().includes(busca.toLowerCase())
    )
    .slice(0, 10);

// Renderiza a interface da aplicação
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
