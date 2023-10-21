import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { getDate_DD_MM_YY, getTime } from "../shared/helperFunctions";
import Language from "../shared/Language";

// eslint-disable-next-line react/prop-types
const InfoShipping = ({ transitEvents }) => {
  const { SHIPMENT_DETAILS, BRANCH, DATE, TIME, DETAILS, NOT_DETERMINED } =
    Language.SHIPMENT_TRACKING;

  // eslint-disable-next-line react/prop-types
  const rows = transitEvents.map((transit) => {
    const dateTime = new Date(transit.timestamp);
    return {
      branch: NOT_DETERMINED,
      date: getDate_DD_MM_YY(dateTime),
      time: getTime(dateTime),
      details: Language.SHIPMENT_STATE[transit.state],
    };
  });

  const Cell = (content, key) => {
    return (
      <TableCell key={key} style={{ fontWeight: "bold" }}>
        {content}
      </TableCell>
    );
  };

  return (
    <React.Fragment>
    <Box className="section-title">{SHIPMENT_DETAILS}</Box>
    <TableContainer style={{ borderRadius: 4, border: "1px solid #f1f1f1" }}>
      <Table aria-label="simple table">
        <TableHead style={{ backgroundColor: "#fafafa" }}>
          <TableRow>
            {[BRANCH, DATE, TIME, DETAILS].map((content, i) =>
              Cell(content, i)
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.values(row).map((value, i) =>
                Cell(value, i)
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </React.Fragment>
  );
};

export default InfoShipping;
