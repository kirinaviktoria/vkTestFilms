import { useState } from 'react'
import './App.css'
import MainHeader from './components/MainHeader/MainHeader'
import '@vkontakte/vkui/dist/vkui.css';

function App() {

  const [text, setText] = useState('Список фильмов')

  return (
    <>
      <MainHeader text = {text}/>
    </>
  )
}

export default App
