import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

export default function FruitCard({ fruitName, fruitPhoto, fruitDes }) {
  return (
    <>
      <Card style={{ width: "300px",margin: '8px' }}>
        <CardActionArea>
          <CardMedia
            component={`img`}
            alt={fruitName}
            height={`150`}
            image={fruitPhoto}
            title={fruitName}
          />
        </CardActionArea>
        <CardContent>
          <Typography variant={`body2`} component={`p`}>
            {fruitName}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
