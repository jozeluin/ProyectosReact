

import {  useState } from 'react'
import MarkdownComponent from '../components/MarkdownComponent'
import './App.css'

function App() {
  const [text_markdown, setText_markdown] = useState(`# Welcome to my React Markdown Previewer!`)

  const handleChange = (event) => {
    setText_markdown(event.target.value)
  }
  

  return (
    <>
    <div>
      <h1>Markdown Previewer</h1>
    </div>
      <textarea 
        value={text_markdown} 
        onChange={handleChange} 
        placeholder="Enter your markdown text here..."
      />
      <MarkdownComponent text_markdown={text_markdown}/>
    </>
  )
}

export default App
