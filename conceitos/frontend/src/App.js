// useEffect é utilizado para disparar funções quando algo acontece;
import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  // useState retorna um array com duas posições
  // Primeira: Variável com seu valor inicial
  // Segunda: Função para atualizar o valor
  const [projects, setProjects] = useState([]);

  // Se quisesse disparar quando projects fosse alterado - useEffect(() => {}, [projects]);
  // Se quisesse disparar apenas uma vez useEffect(() => {}, []);
  useEffect(() => {
    // Barra é opcional
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    // Nao podemos utilizar o push, pois ele altera o valor do array, infringindo o conceito de imutabilidade
    //projects.push(`Novo projeto ${Date.now()}`);

    // Devemos criar um novo array com o anterior, mais o novo
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Lucas W. da Motta",
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        { projects.map(project => <li key={ project.id }>{ project.title }</li>) }
      </ul>

      <button type="button" onClick={ handleAddProject }>Adicionar projeto</button>
    </>
  );
}

export default App;