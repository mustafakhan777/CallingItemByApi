import { useState } from "react";
import axios from "axios";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function CardWithApiData() {
  const [listData, setListData] = useState([]);
  let getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const navigate = useNavigate();
  // let clickcard = (id) => {};
  // navigate();
  return (
    <>
      <Box width="100%">
        <Typography className="fw-bold text-center fs-3">ITEMS</Typography>
        <Box width="100%" className="text-center">
          <Button onClick={getData} variant="contained">
            Get Items
          </Button>
        </Box>
      </Box>
      <Grid container>
        {listData.map((x, i) => {
          // console.log(x);
          return (
            <Grid item className="text-wrap" xs={4} sm={4} md={4} lg={4} xl={4}>
              <Paper
                onClick={() => console.log(x.id)}
                className="p-3 text-wrap"
              >
                <Box>
                  <img src={x.image} width="100%" height="50%"></img>
                </Box>
                <Box>
                  <Typography variant="h6">{x.title}</Typography>
                </Box>
                <Box>
                  <Typography variant="p">{x.category}</Typography>
                </Box>
                <Box className="text-wrap">
                  <Typography variant="p">{x.description}</Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
