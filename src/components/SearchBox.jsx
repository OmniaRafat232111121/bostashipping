/* eslint-disable react/prop-types */
import { useState } from "react";
import { Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Language from "../shared/Language";
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ title, variant }) => {
  const navigate = useNavigate();

  const isRTL = Language.dir === "rtl";

  const { EMPTY_FIELD_ERROR, NUMBERS_ONLY } = Language.ERRORS;
  const [trackingNum, setTrackingNum] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value)) {
      setTrackingNum(value);
      setError(null);
    } else {
      setError(NUMBERS_ONLY);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNum) {
      setError(null);
      navigate(`/tracking-shipment/${trackingNum}`); // Use trackingNum from the component state
    } else {
      setError(EMPTY_FIELD_ERROR);
    }
  };

  return (
    <Paper style={{ margin: "10px 0", padding: '10px 10px', width: '400px' }}>
      <Typography variant={variant} color="#ff0000" style={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="h6">
        {Language.SHIPMENT_TRACKING.WRITE_SHIPMENT_NUMBER_AND_TRACK_IT}
      </Typography>
      <form onSubmit={handleSubmit} style={{ margin: "10px 0" }}>
        <Grid container>
          <Grid item xs={9} sm={6}>
            <TextField
              label={Language.SHIPMENT_TRACKING.TRACKING_NUMBER}
              variant="outlined"
              size="small"
              value={trackingNum}
              onChange={handleChange}
              error={Boolean(error)}
              helperText={error || " "}
              fullWidth
              style={{ position: 'absolute', width: '350px' }}
            />
          </Grid>
          <Grid item xs={3} sm={6}>
            <IconButton
              type="submit"
              className="search-icons"
              style={{
                backgroundColor: "#ff0000",
                color: "#fff",
                margin: "0 10px",
                position: 'relative',
                top: isRTL ? "0px" : "0px",
                right: isRTL ? "110px" : "-110px",
                borderRadius: '0px'
              }}
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SearchBox;
