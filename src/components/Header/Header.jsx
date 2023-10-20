import  { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Divider, Hidden,  Box, AppBar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Language from "../../shared/Language";

const Navbar = (logoLang) => { 
  const [openMenu, setOpenMenu] = useState(false);
  const navbarRef = useRef();
  const { MAIN, PRICES, CALL_SALES, TRACK_SHIPMENT,LOGIN } = Language.MENU;

  const handleLanguageClick = () => {
    if (Language.language === "ar") {
      localStorage.setItem("userLanguage", "en");
    } else if (Language.language === "en") {
      localStorage.setItem("userLanguage", "ar");
    }
    window.location.reload(false);
  };

 

  const handleMenuIconClick = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = (e) => {
    if (openMenu && navbarRef.current && !navbarRef.current.contains(e.target)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.addEventListener("click", closeMenu);
      return () => {
        document.removeEventListener("click", closeMenu);
      };
    }
  }, [openMenu]);

  const getLogoImagePath = (lang) => {
    return `../../assets/images/bosta_${lang}.svg`;
  };
  const bostaLogoAr = getLogoImagePath("ar");
  const bostaLogoEn = getLogoImagePath("en");
  return (
    <AppBar position="fixed" className="navbar" ref={navbarRef}>
      <Box style={{ borderBottom: "1px solid #ddd", padding: "18px 0" }}>
        <Grid container maxWidth="lg" style={{ margin: "auto" }}>
          <Grid container justifyContent="flex-start" item xs={6} md={2}>
            <Link to="/" className="navbar-item">
              <img className="navbar-logo" 
               src={logoLang === 'ar' ? bostaLogoAr : bostaLogoEn} 
               alt="bosta-logo" />
            </Link>
          </Grid>
          <Hidden mdDown>
            <Grid container justifyContent="center" item md={5}>
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                exact
                to="/"
              >
                {MAIN}
              </NavLink>
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                exact
                to="/prices"
              >
                {PRICES}
              </NavLink>
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                exact
                to="/call-sales"
              >
                {CALL_SALES}
              </NavLink>
            </Grid>
            <Grid container justifyContent="flex-end" item md={5}>
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                to="/tracking-shipment"
              >
                {TRACK_SHIPMENT}
              </NavLink>
              <Divider orientation="vertical" />
              <NavLink
                activeClassName="navbar-item-active"
                className="navbar-item navbar-link navbar-item-text"
                exact
                to="/login"
              >
                {LOGIN}
              </NavLink>
              <Box
                className="navbar-item navbar-link navbar-language"
                onClick={handleLanguageClick}
              >
                {Language.language === "ar" ? "ENG" : "عربي"}
              </Box>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container justifyContent="flex-end" item xs={6}>
              <IconButton
                aria-label="menu"
                size="large"
                className="navbar-menu-icon"
                onClick={handleMenuIconClick}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
      {/* <Hidden mdUp>{openMenu && <SmallDeviceMenu items={menuItems} />}</Hidden> */}
    </AppBar>
  );
};

export default Navbar;
