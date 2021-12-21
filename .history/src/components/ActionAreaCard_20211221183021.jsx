import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from 'react-redux';
import {removeCity} from '../store';

export default function ActionAreaCard({country, name, icon, main, id}) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ width: 200, margin: '10px', border: '1px solid #2196f3', backgroundColor: '#0091ea' }}>
      <CardActionArea>
        <CloseIcon onClick={()=> dispatch(removeCity(id))} />
        <CardMedia
          component="img"
          height="100"
          image={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="img of weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           City: {name}
          </Typography>
          <Typography variant="body2" color="text.primary" component="div">
            <Typography variant="subtitle2">Country: {country}</Typography>
            <Typography variant="subtitle2">temp: {Math.round(main.temp)}&deg;</Typography>
            <Typography variant="subtitle2">temp max: {Math.round(main.temp_max)}&deg; </Typography>
            <Typography variant="subtitle2">temp min: {Math.round(main.temp_min)}&deg; </Typography>
            <Typography variant="subtitle2">feels like: {Math.round(main.feels_like)}&deg; </Typography>
            <Typography variant="subtitle2">pressure: {main.pressure}</Typography>
            <Typography variant="subtitle2">humidity: {main.humidity}</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
