import Header from './components/Header';
import WeatherSection from './components/WeatherSection';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container sx={{}}>
        <WeatherSection />
      </Container>
    </>
  );
}

export default App;
