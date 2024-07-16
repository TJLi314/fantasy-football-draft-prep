import { Provider } from "react-redux";
import "./App.css";
import storeBuilder from "./store/store";
import Home from "./Home";

const store = storeBuilder();
console.log("store: ", store);

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
