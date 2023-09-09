import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CardWithApiData from "../component/Card";
import { Box } from "@mui/material";

export default function Approuter() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="items/*" element={<CardWithApiData />} />
        </Routes>
      </Router>
    </Box>
  );
}
