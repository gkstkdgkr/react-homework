import "../style/main.css";
import Profile from "./profileComponent";

function App() {
  return (
    <div className="App">
      <ul className="ProfileList">
        <li>
          <Profile name="티빙 기본 프로필" status="tving" />
        </li>
        <li>
          <Profile name="곰인형 프로필" status="bear" />
        </li>
        <li>
          <Profile name="소녀 프로필" status="girl" />
        </li>
        <li>
          <Profile name="소년 프로필" status="man" />
        </li>
      </ul>
    </div>
  );
}

export default App;
