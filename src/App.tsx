import { Provider } from "react-redux";
import "./App.css";
import storeBuilder from "./store/store";
import ReceiversHome from "./homePages/ReceiversHome";
import RunningbacksHome from "./homePages/RunningbacksHome";
import QuarterbacksHome from "./homePages/QuarterbacksHome";
import TightendsHome from "./homePages/TightendsHome";

const store = storeBuilder();
console.log("store: ", store);

const App = () => {
  return (
    <Provider store={store}>
      <TightendsHome />
    </Provider>
  );
};

export default App;
