import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({name, icon, main}) {
   console.log(icon)
  return (
    <Card sx={{ width: 200, margin: '10px', backgroundColor: '#009688' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
         //  image="https://openweathermap.org/img/wn/02d@2x.png"
          image={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <p>temp: {Math.round(main.temp)}</p>
            <p>temp max: {Math.round(main.temp_max)}</p>
            <p>temp min: {Math.round(main.temp_min)}</p>
            <p>feels like: {main.feels_like}</p>
            <p>pressure: {main.pressure}</p>
            <p>humidity: {main.humidity}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
