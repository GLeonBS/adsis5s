import maskForm from './forms/cep.html?raw'
import {cep} from './forms/cep'
import './style.scss'

// const app = document.querySelector('#app')

// if (app) {
//   app.innerHTML = maskForm
//   cep()
// }

// const valorStorage = localStorage.length
// localStorage.setItem('chave2', 'Valor')
// const valorChave = localStorage.getItem('chave2')
// console.log(valorChave)

// const input = document.querySelector<HTMLInputElement>('#cep')!
// if(input){
//   input.onchange = () => {
//     localStorage.setItem('cep', input.value)
//   }

  
// }
// Generated by https://quicktype.io

export interface Produto {
  nome:         string;
  qtde:         number;
  preco:        number;
  data_compra:  string;
  data_entrega: string;
}



const url = await "http://localhost:3000/products"
// fetch(url, {
//   method: 'POST',
//   body.stringify{}
// })

fetch(url)
    .then(res => res.json())
    .then((data: Produto[])=> {

      const template =  document.querySelector('template')!
     data.forEach(produto => {
      console.log(produto);
     });
    })
