import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repository">
          <img
            src="https://avatars0.githubusercontent.com/u/28100667?s=460&u=3eb2085147656b449e092f307bff74af74b8853b&v=4"
            alt="Lucas Motta"
          />
          <div>
            <strong>lucaswantz/gostack</strong>
            <p>Curso gostack da rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repository">
          <img
            src="https://avatars0.githubusercontent.com/u/28100667?s=460&u=3eb2085147656b449e092f307bff74af74b8853b&v=4"
            alt="Lucas Motta"
          />
          <div>
            <strong>lucaswantz/gostack</strong>
            <p>Curso gostack da rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="repository">
          <img
            src="https://avatars0.githubusercontent.com/u/28100667?s=460&u=3eb2085147656b449e092f307bff74af74b8853b&v=4"
            alt="Lucas Motta"
          />
          <div>
            <strong>lucaswantz/gostack</strong>
            <p>Curso gostack da rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
