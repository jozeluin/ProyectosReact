

import {  useState } from 'react'
import MarkdownComponent from '../components/MarkdownComponent'
import './App.css'

function App() {
  const [text_markdown, setText_markdown] = useState(
    `# Heading 
## Sub-heading
link: [freeCodeCamp](https://www.freecodecamp.org)

inline code: \`<div></div>\`
code block:
\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return true;
  } else {
    return false;
  }
}
\`\`\`
list item:
- first item
- second item
a blockquote:
> blockquote text


**bold text**

and an image:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)



    `


  )

  const handleChange = (event) => {
    setText_markdown(event.target.value)
  }
  

  return (
    <>
    
    <div>
      <h1>Markdown Previewer</h1>
    </div>
      <textarea 
        id="editor"
        className='tex_markdown'
        value={text_markdown} 
        onChange={handleChange} 
        placeholder="Enter your markdown text here..."
      />
      <label>Texto Descifrado</label>
      <div id="preview">
         <MarkdownComponent  text_markdown={text_markdown}/>
      </div>
     
      
    </>
  )
}

export default App
