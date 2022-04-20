// import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

// import { MoralisProvider } from "react-moralis";
// import { MoralisDappProvider } from "./Providers/MoralisDappProvider/MoralisDappProvider";

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
    <App />
  //   <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
  //   <MoralisDappProvider>
  //     <App />
  //   </MoralisDappProvider>
  // </MoralisProvider>,
  // </StrictMode>,
);

