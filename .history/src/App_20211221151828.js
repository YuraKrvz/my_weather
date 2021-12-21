import {Provider} from 'react-redux';
import {store} from './store';
import Header from './components/Header';
import WeatherSection from './components/WeatherSection';
import Container from '@mui/material/Container';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Container sx={{p: '1rem'}}>
        <WeatherSection />
      </Container>
    </Provider>
  );
}

export default App;
