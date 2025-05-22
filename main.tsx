import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "app/App.tsx";
import {BrowserRouter} from "react-router-dom";
import 'app/styles/index.scss'
import {StoreProvider} from "app/providers/StoreProvider";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <StoreProvider>
              <App />
          </StoreProvider>
      </BrowserRouter>
  </StrictMode>,
)
