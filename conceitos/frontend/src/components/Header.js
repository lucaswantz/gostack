import React from 'react';

// title: Desestruturação para pegar apenas o componente que vem
// children: elemento filho
export default function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}