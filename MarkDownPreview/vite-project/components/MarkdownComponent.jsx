import ReactMarkdown from "react-markdown";

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
      <ReactMarkdown>{text_markdown}</ReactMarkdown>
    </section>
  );
}

export default MarkdownComponent;