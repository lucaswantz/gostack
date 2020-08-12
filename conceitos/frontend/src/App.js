import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  // useState retorna um array com duas posições
  // Primeira: Variável com seu valor inicial
  // Segunda: Função para atualizar o valor
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    // Nao podemos utilizar o push, pois ele altera o valor do array, infringindo o conceito de imutabilidade
    //projects.push(`Novo projeto ${Date.now()}`);

    // Devemos criar um novo array com o anterior, mais o novo
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <button type="button" onClick={ handleAddProject }>Adicionar projeto</button>
      <ul>
        { projects.map(project => <li key={ project }>{ project }</li>) }
      </ul>

    </>
  );
}

export default App;