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


  const getNewQuote = () => {
    let randomIndex = Math.floor(Math.random() * quote.length);
    setRandomQuote(quote[randomIndex]);
  };

  //https://dummyjson.com/quotes
  return (
    <div className="container pt-5">
      <div className="shadow-none p-5 mb-5 bg-light rounded">
        <div className="card">
          <div className="card-header">Citas que inspiran</div>
          <div className="card-body" id="quote-box">
            {randomQuote ? (
              <>
                <h5 className="card-title" id="author"> "{randomQuote.author || "No author"}"</h5>
                <p className="card-text" id="text">{randomQuote.quote}</p>
              </>
            ) : (
              <h2>Cargando...</h2>
            )}
            <div className="d-inline">
              <button onClick={getNewQuote} className="btn btn-primary ml-3" id="new-quote">New Quote</button>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(randomQuote.quote)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info mx-2"
                id="tweet-quote"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>

             
              <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=,&caption=${randomQuote.author}&content=${randomQuote.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button
randomQuote.quote)}`}className="btn btn-danger">
                <i class="fa-brands fa-tumblr"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

