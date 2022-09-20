/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (string, number) => {
  const sentence = 'Oi, meu nome é';
  const sentencetwo = 'trabalho na Trybe e mando muito em programação!';
  let name = string;
  let age = number;
  let concat = `${sentence} ${name}!\nTenho ${age} anos,\n${sentencetwo}\n#VQV!`;
  if (string === undefined || number === undefined) {
    return undefined;
  }
  return concat;
};
/* console.log(vqv('Tonico', 30)); */

module.exports = vqv;
