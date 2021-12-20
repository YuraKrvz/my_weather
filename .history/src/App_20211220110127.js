import Header from './components/Header';
import WeatherSection from './components/WeatherSection';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Header />
      <Container sx={{p: '1rem', display: 'flex'}}>
        <WeatherSection />
      </Container>
    </>
  );
}

export default App;
