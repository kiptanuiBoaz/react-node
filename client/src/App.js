import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    uper(props);
    this.state ={apiResponse:""}
  }

  callApi(){
    fetch("https://localhost:9000/testAPI")
      .then((res=> res.text()))
      .then((res=> res.setState({apiResponse:res})))
  }

  componentWillMount() {
    this.callApi()
}


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{this.state.apiResponse}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
