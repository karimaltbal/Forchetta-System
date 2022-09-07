import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import store from "./redux/store/store"
import App from './App';
import "./i18next"
import Loader from './component/layout/Loader/Loader.js';

import {Provider} from "react-redux"
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

        <HelmetProvider>
          <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...options}>
              <BrowserRouter>
              <Suspense fallback={<Loader />}>
                <App />
              </Suspense>
              </BrowserRouter>
            </AlertProvider>
          </Provider>
        </HelmetProvider>
);
