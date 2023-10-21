/* eslint-disable react/prop-types */

import { Container, Grid, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Language from "../shared/Language";
import Station from "../shared/Station";


const StatusBarHorizontal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { bgColor, lastState } = props;

  const dir = Language.language === "ar" ? "left" : "right";

  // eslint-disable-next-line react/prop-types
  const StatusItem = ({ hasFirst, state }) => {
    let done = false;
    let barBgColor = "#eee";
    if (Station[lastState] >= Station[state]) {
      done = true;
      barBgColor = bgColor;
    }
    return (
      <Grid item xs={4}>
        <Box
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            position: "relative",
          }}
        >
          {hasFirst && (
            <CheckCircleIcon
              style={{
                color: bgColor,
                position: "absolute",
                [Language.language === "ar" ? "right" : "left"]: -19,
              }}
            />
          )}
          <Box style={{ height: 8, backgroundColor: barBgColor }} />
          {done ? (
            <CheckCircleIcon
              style={{
                color: bgColor,
                position: "absolute",
                [dir]: -19,
              }}
            />
          ) : (
            <CircleIcon
              style={{ color: "#eee", position: "absolute", [dir]: -19 }}
            />
          )}
        </Box>
      </Grid>
    );
  };

  const StatusText = ({ text, style }) => {
    let color = "#ccc";
    if (Station[lastState] >= Station[text]) {
      color = "#000";
    }
    return (
      <Grid item xs={3} style={{ fontWeight: 700, color: color, ...style }}>
        {Language.SHIPMENT_STATE[text]}
      </Grid>
    );
  };

  return (
    <Container style={{marginTop: 10}}>
      <Grid container spacing={2}>
        <StatusItem state="PACKAGE_RECEIVED" hasFirst />
        <StatusItem state="OUT_FOR_DELIVERY" />
        <StatusItem state="DELIVERED" />
      </Grid>
      <Grid container style={{ paddingTop: 20 }} spacing={3}>
        <StatusText text="TICKET_CREATED" />
        <StatusText
          text="PACKAGE_RECEIVED"
          style={{ textAlign: Language.Language === "ar" ? "right" : "left" }}
        />
        <StatusText
          text="OUT_FOR_DELIVERY"
          style={{ textAlign: Language.Language === "ar" ? "left" : "right" }}
        />
        <StatusText
          text="DELIVERED"
          style={{ textAlign: Language.language === "ar" ? "left" : "right" }}
        />
        
      </Grid>
    </Container>
  );
};

export default StatusBarHorizontal;