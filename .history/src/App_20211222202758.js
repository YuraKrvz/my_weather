import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store';
import Header from './components/Header';
import WeatherSection from './components/WeatherSection';
import Container from '@mui/material/Container';


function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <Header />
          <Container sx={{p: '1rem'}}>
            <WeatherSection />
          </Container>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
