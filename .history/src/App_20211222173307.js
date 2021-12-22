import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store} from './store';
import Header from './components/Header';
import WeatherSection from './components/WeatherSection';
import Container from '@mui/material/Container';


function App() {
  return (
    <>
      <Provider store={store}>
          <Header />
        <Container sx={{p: '1rem'}}>
          <WeatherSection />
        </Container>
      </Provider>
    </>
  );
}

export default App;
