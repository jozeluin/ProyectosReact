import React, { useState } from 'react';
import { marked } from 'marked';

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('# ¡Hola Mundo!\n\nEste es un **ejemplo**.');

  // Convierte el markdown a HTML
  const html = marked.parse(markdown);

  return (
    <div>
      {/* Área para editar el markdown */}
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      {/* Área para previsualizar el HTML */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default MarkdownPreviewer;