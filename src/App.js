import CategoryButton from "./components/cattegory-page/category-block";
import MainPage from "./pages/main";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter history>
          <MainPage />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
