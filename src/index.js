/*const element = document.createElement('h1')
element.innerText = 'ola, q ase react'

const container = document.getElementById('root')
container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Exercises from './pages/Exercises'


//EJERCICIO DE PRUEBA
/*
const user = {
    firstName: 'Pablo',
    lastName: 'Parra',
    avatar: 'https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
      return <h1>Ola, q ase {getName(user)} React</h1>
  }
  return <h1>Hola extraño</h1>
}

const name = 'Pablo'
//const element = <h1>Ola, q ase {getName(user)} React</h1>

//este diria hola extraño
//const element = <div>{getGreeting()}</div>
const element = (
  <div>
    <h1>{getGreeting(user)}</h1> 
    <img src={user.avatar}/>
  </div>
)
*/
const container = document.getElementById('root')
// ReactDOM.render(QUE,DONDE)
ReactDOM.render(<Exercises/>, container)