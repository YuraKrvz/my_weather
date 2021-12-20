import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({name, icon, main}) {
   console.log(icon)
  return (
    <Card sx={{ width: 200, margin: '10px', border: '3px solid #2196f3' }}>
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
            <Typography variant="subtitle2" >temp: {Math.round(main.temp)}</Typography>
            <Typography variant="subtitle2">temp max: {Math.round(main.temp_max)}</Typography>
            <Typography variant="subtitle2">temp min: {Math.round(main.temp_min)}</Typography>
            <Typography variant="subtitle2">feels like: {main.feels_like}</Typography>
            <Typography variant="subtitle2">pressure: {main.pressure}</Typography>
            <Typography variant="subtitle2">humidity: {main.humidity}</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
