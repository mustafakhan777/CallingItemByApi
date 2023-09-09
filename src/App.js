import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@mui/material";
import Approuter from "./config/router";

export default function PostScreen() {
  return (
    <>
      <Box className="bg-black text-center">
        <a href="items" className="btn btn-warning">
          Click here for items
        </a>
      </Box>
      <Approuter />
    </>
  );
}
