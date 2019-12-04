import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import "react-table/react-table.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import reduxThunk from "redux-thunk";

const Dashboard = () => {
 return <App />;
};

const store = createStore(rootReducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
 <Provider store={store}>
  <Dashboard />
 </Provider>
 ,
 document.getElementById("root")
);
