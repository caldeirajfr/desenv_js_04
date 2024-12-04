// Capturando os elementos
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando texto ao h1
titulo.innerText = 'Bem-vindo ao Projeto JavaScript';

// Adicionando texto ao link
link.innerText = 'Visite o site da Prozeducação';

// Adicionando itens à lista não ordenada com innerHTML
listaNaoOrdenada.innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;

// Adicionando itens com links à lista ordenada com innerHTML
listaOrdenada.innerHTML = `
  <li><a href="https://youtube.com" target="_blank">Youtube</a></li>
  <li><a href="https://github.com" target="_blank">GitHub</a></li>
  <li><a href="https://www.w3schools.com" target="_blank">W3 Schools</a></li>
`;
