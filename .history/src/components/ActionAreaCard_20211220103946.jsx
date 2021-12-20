import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({name, icon, main}) {
   console.log(icon)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
         //  image="https://openweathermap.org/img/wn/02d@2x.png"
          image={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>{main.temp}</p>
            <p>{main.temp_max}</p>
            <p>{main.temp_min}</p>
            <p></p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
