import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createStore from "./redux/store/index";
import Routes from "./routes/routes";
import 'antd/dist/antd.css';

const App = () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
