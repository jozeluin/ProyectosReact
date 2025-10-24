const App = () => {
  const [quote, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();

      setQuotes(data.quotes);
      let randomIndex = Math.floor(Math.random() * data.quotes.length);
      setRandomQuote(data.quotes[randomIndex]);
    }
    fetchData();
  }, []);

  //https://dummyjson.com/quotes
  return (
    <div>
      Hola Mundosssss
      {quote.map((quoteItem) => (
        <div>{quoteItem.quote}</div>
      ))}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
