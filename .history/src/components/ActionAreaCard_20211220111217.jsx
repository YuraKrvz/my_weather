import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({name, icon, main}) {
   console.log(icon)
  return (
    <Card sx={{ width: 200, margin: '10px', backgroundColor: '#2196f3' }}>
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
            <Typography >temp: {Math.round(main.temp)}</Typography>
            <Typography >temp max: {Math.round(main.temp_max)}</Typography>
            <Typography >temp min: {Math.round(main.temp_min)}</Typography>
            <Typography >feels like: {main.feels_like}</Typography>
            <Typography >pressure: {main.pressure}</Typography>
            <Typography >humidity: {main.humidity}</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
