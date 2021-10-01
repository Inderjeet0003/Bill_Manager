import Routes from "./Routes";
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import "./App.css";
const store = ConfigureStore();
function App() {
  return (
    <div className="App" style={{color:'green'}}>
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    </div>
  );
}

export default App;
