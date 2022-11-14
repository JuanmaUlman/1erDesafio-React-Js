import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./Item.css";
import { Link } from "react-router-dom";

const MultiActionAreaCard = ({ img, title, description, price, id }) => {
  return (
    <Card className="cardItem" >
      <CardActionArea
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
        <img src={img}  className="img img-fluid" alt="" />
        {/* <CardMedia
          component="img"
          image={img}
          alt="img"
          className="img img-fluid"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {description}
          </Typography> */}
          <Typography variant="h5" className="precio">
            ${price}
          </Typography>

          <Link to={`/item/${id}`} className="Link">
            <Button
              variant="contained"
              color="info"
              style={{ marginTop: "10px" }}
            >
              DETALLES
            </Button>
          </Link>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
