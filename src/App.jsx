
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {HomePage, Nave, Repositories} from "./components/index.js";
import {Game} from "./components/Game/index.js";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
      <BrowserRouter>
          <div>
              <Nave />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<Repositories />} />
                  <Route path="/game" element={<Game />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
          </div>

      </BrowserRouter>
  )
}

export default App
