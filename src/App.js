import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          이번 학기, 오픈 소스 소프트웨어 프로젝트를 진행하기 위해 테스트 중
          입니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          당신께, 리액트를 배울 수 있는 기회를 드립니다. 이 링크를 누르세요.
        </a>
      </header>
    </div>
  );
}

export default App;
