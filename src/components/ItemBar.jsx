import { Box, Grid } from "@mui/material";
import Language from "../shared/Language";

const ItemBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, data, style }=props;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={3}
      className="item"
      key={title}
      style={{ textAlign: Language.language === "ar" ? "right" : "left" }}
    >
      <Box className="title">{title}</Box>
      <Box className="data" style={style}>
        {data}
      </Box>
    </Grid>
  );
};
export default ItemBar;