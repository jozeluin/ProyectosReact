import ReactMarkdown from "react-markdown";
import style from './markdown-styles.module.css';

// const markdownText = `
// # React Markdown Example

// - Some text
// - Some other text

// ## Subtitle

// ### Additional info

// This is a [link](https://github.com/remarkjs/react-markdown)
// `;

function MarkdownComponent({text_markdown}) {
  return (
    <section>
      <div className={style.reactMarkDown}>
        <ReactMarkdown  >{text_markdown}</ReactMarkdown>
      </div>
      
    </section>
  );
}

export default MarkdownComponent;