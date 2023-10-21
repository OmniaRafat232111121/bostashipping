import  { useState, useEffect } from "react";

import { Container, Hidden } from "@mui/material";


import StatusBarHorizontal from "./StatusBarHorizontal";
import ColorBar from "../shared/ColorBar";
import Station from "../shared/Station";

const StatusBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { transitEvents } = props;
  const [lastState, setLastState] = 
  // eslint-disable-next-line react/prop-types
  useState(transitEvents[transitEvents.length - 1].state);
  const [bgColor, setBgColor] = useState(ColorBar[lastState]);


  const statusBarProps = {
    transitEvents,
    bgColor,
    lastState,
  };

  useEffect(() => {
    if (!Station[lastState]) {
      // eslint-disable-next-line react/prop-types
      const states = transitEvents.map(({ state }) => state);
      const keys = Object.keys(Station).map((state) => state);

      for (let i = 0; i < keys.length; i++) {
        const state = states.find(
          (state) => state === Station[keys[i]]
        );
        if (state) {
          setLastState(state);
          break;
        } else if (i === keys.length - 1) {
          // Last element
          setLastState("TICKET_CREATED");
        }
      }

      setBgColor(ColorBar.TICKET_CREATED);
    }
  }, []);

  
  return (
    <Container style={{ padding: '24px 0' }}>
      <Hidden smDown>
        <StatusBarHorizontal {...statusBarProps} />
      </Hidden>
      
    </Container>
  );
};

export default StatusBar;