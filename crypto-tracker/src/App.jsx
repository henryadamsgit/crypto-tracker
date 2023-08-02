import "./App.css";
import Main from "./components/Main/Main";
import SideMain from "./components/SideMain/SideMain";
import TopNav from "./components/TopNav/TopNav";

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Main />
      <SideMain />
    </div>
  );
};

export default App;
