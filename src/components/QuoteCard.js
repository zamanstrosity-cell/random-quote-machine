import React, { Component } from "react";
import quotes from '../quotes.json';

export class QuoteCard extends Component {

    state = {
      quotes: quotes,
      quote: "",
      author: "",
    };


 getRandomQuote = () => {
    const random = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[random];
    this.setState({
        ...this.state,
        quote: randomQuote.quoteText,
        author: randomQuote.quoteAuthor
    })
    this.props.newBg()
  }

   componentDidMount() {
    this.getRandomQuote();
  }

  render() {
    return (
      <React.Fragment>
        <div id="quote-box">
          <div id="text">"{this.state.quote}"</div>
          <span id="author">
            <em> "{this.state.author}" </em>
          </span>
          <div id="card-bottom">
            <button
              id="new-quote"
              style={{ backgroundColor: this.props.background }}
              onClick={this.getRandomQuote}
            >
              New Quote
            </button>
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noopener noreferrer"
              id="tweet-quote"
            >
              Tweet
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default QuoteCard;
