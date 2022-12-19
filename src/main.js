import './index.scss'

import {apiService} from './utils/apiService'
import getRefs from "./utils/getRefs";

import FilmsList from './components/molecules/FilmsList/FilmsList'
import Footer from './components/organisms/Footer/Footer'

import filmotekaLogo from './assets/icon/filmoteka.svg'
import {setupCounter} from './components/counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev">
      <img src="${filmotekaLogo}" class="logo" alt="Vite logo" />
    <h1 class="logo">Filmoteka</h1>
    </a>
    <h1 class="hello">Hello World</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <ul class="films"></ul>
`





setupCounter(document.querySelector('#counter'))

const component = Footer('Another one: ')

document.querySelector('body').appendChild(component)

FilmsList().then(r => console.log(r))