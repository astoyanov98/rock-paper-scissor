import './App.css';
import Home from './container/Home'
import Result from './container/Result';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store/store';

function App() {
  const { store, persistor } = configureStore();

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/result" element={<Result />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
