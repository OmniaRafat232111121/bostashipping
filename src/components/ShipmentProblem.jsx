
import { Grid, Button, Paper } from "@mui/material";

import haveProblem from "../assets/images/questions.png";
import Language from "../shared/Language";

const ShipmentProblem = () => {
  return (
    <Paper
      elevation={0}
      style={{
        border: "1px solid #f1f1f1",
        marginTop: "10px",
        padding: "10px 20px",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={4} style={{ padding: 5 }}>
          <img
            src={haveProblem}
            alt="have-problem"
            style={{ width: "100%", height: "100%", verticalAlign: "middle" }}
          />
        </Grid>
        <Grid item xs={8} style={{ padding: 5 }}>
          {Language.SHIPMENT_TRACKING.HAVE_PROBLEM}
          <Button
            fullWidth
            style={{
              backgroundColor: "#ff0000",
              color: "#fff",
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            {Language.SHIPMENT_TRACKING.REPORT_PROBLEM}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ShipmentProblem;