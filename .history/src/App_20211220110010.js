import Header from './components/Header';
import WeatherSection from './components/WeatherSection';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container sx={{m: '2rem'}}>
        <WeatherSection />
      </Container>
    </>
  );
}

export default App;
