import ReactMarkdown from "react-markdown";

const markdownText = `
# React Markdown Example

- Some text
- Some other text

## Subtitle

### Additional info

This is a [link](https://github.com/remarkjs/react-markdown)
`;

function MarkdownComponent() {
  return (
    <section>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </section>
  );
}

export default MarkdownComponent;