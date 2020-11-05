import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
      };
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculatedWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
          return (
            <li key={move}> 
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
          )
      })
      let status;
      if (winner) {
        status = "Winner: " + winner;
      }
      else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
 */
  // ========================================
  
function NavBar(props){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Recipe Website</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">My Account<span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
    )
}
  class Page extends React.Component{
    constructor(props) {
      super(props);

    }
    render(){
      return (<NavBar />)
    }
  }
  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );
  