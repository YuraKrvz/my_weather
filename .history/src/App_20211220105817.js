import Header from './components/Header';
import WeatherSection from './components/WeatherSection';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container padding="100">
        <WeatherSection />
      </Container>
    </>
  );
}

export default App;
