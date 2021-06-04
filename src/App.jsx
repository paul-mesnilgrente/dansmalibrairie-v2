import logo from './logo.png';

function App() {
  return (
    <div className="container-fluid">
      <header className="row">
        <div className="col-12 text-center">
          <img src={logo} alt="logo" height="500" />
        </div>
        <p className="col-12 text-center">
          Retrouvez-nous à Agen!
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="col text-center"
        >
          Facebook
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="col text-center"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
