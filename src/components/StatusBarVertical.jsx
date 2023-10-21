/* eslint-disable react/prop-types */
import React from "react";

import { Container, Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Language from "../shared/Language";
import Station from "../shared/Station";

const StatusBarVertical = (props) => {
  const { generalBgColor, lastState } = props;

  const StatusItem = ({ state, text }) => {
    let done = false;
    if (Station[lastState] >= Station[state]) {
      done = true;
    }

    return (
      <Box style={{ margin: "5px 0" }}>
        {done ? (
          <React.Fragment>
            <CheckCircleIcon
              style={{
                color: generalBgColor,
                verticalAlign: "middle",
                margin: "0 3px",
              }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <CircleIcon
              style={{
                color: "#ccc",
                verticalAlign: "middle",
                margin: "0 3px",
              }}
            />
          </React.Fragment>
        )}

        <Typography
          style={{
            display: "inline",
            color: `${done ? "#000" : "#ccc"}`,
            fontWeight: "bold",
          }}
        >
          {Language.SHIPMENT_STATE[text]}
        </Typography>
      </Box>
    );
  };

  return (
    <Container>
      <StatusItem state="TICKET_CREATED" text="TICKET_CREATED" />
      <StatusItem state="PACKAGE_RECEIVED" text="PACKAGE_RECEIVED" />
      <StatusItem state="OUT_FOR_DELIVERY" text="OUT_FOR_DELIVERY" />
      <StatusItem state="DELIVERED" text="DELIVERED" />
    </Container>
  );
};

export default StatusBarVertical;
