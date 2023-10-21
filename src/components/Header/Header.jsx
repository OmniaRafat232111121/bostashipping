import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Divider, Hidden, Box, AppBar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Language from "../../shared/Language";
import logoAr from "../../assets/images/bosta_logo_ar.svg";
import logoEN from "../../assets/images/bosta_logo_en.svg";
import HeaderResponsive from "./HeaderResponsive";

const Navbar = (logoLang) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navbarRef = useRef();
  const { MAIN, PRICES, CALL_SALES, TRACK_SHIPMENT, LOGIN } = Language.MENU;

  const ChangeLanguage = () => {
    const newLanguage = Language.language === "ar" ? "en" : "ar";
    localStorage.setItem("userLanguage", newLanguage);
    window.location.reload(false);
  };
  const handleMenuIconClick = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = (e) => {
    if (
      openMenu &&
      navbarRef.current &&
      !navbarRef.current.contains(e.target)
    ) {
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
  const menuItems = [
    {
      title: MAIN,
      link: "/",
    },
    {
      title: PRICES,
      link: "/prices",
    },
    {
      title: CALL_SALES,
      link: "/call-sales",
    },
    {
      title: TRACK_SHIPMENT,
      link: "/tracking-shipment",
    },
    {
      title: LOGIN,
      link: "/login",
    },
    {
      title: Language.language === "ar" ? "ENG" : "عربي",
      onClick: ChangeLanguage,
    },
  ];
  return (
    <AppBar position="fixed" className="navbar" ref={navbarRef}>
      <Box style={{ padding: "18px 0", position: "relative" }}>
        <Grid container maxWidth="lg" style={{ margin: "auto" }}>
          <Grid container justifyContent="flex-start" item xs={6} md={2}>
            <Link to="/" className="navbar-item">
              <img
                className="navbar-logo"
                src={logoLang === "ar" ? logoAr : logoEN}
                alt="bosta-logo"
              />
            </Link>
          </Grid>
          <Hidden mdDown>
            <Grid container justifyContent="center" item md={5}>
              <NavLink
                className="navbar-item navbar-link navbar-item-text
                navbar-item-active"
                exact
                to="/"
              >
                {MAIN}
              </NavLink>
              <NavLink
                className="navbar-item navbar-link navbar-item-text
                navbar-item-active"
                exact
                to="/prices"
              >
                {PRICES}
              </NavLink>
              <NavLink
                className="navbar-item navbar-link navbar-item-text
                navbar-item-active"
                exact
                to="/call-sales"
              >
                {CALL_SALES}
              </NavLink>
            </Grid>
            <Grid container justifyContent="flex-end" item md={5}>
              <NavLink
                className="navbar-item navbar-link navbar-item-text
                navbar-item-active"
                to="/tracking-shipment"
              >
                {TRACK_SHIPMENT}
              </NavLink>

              <Divider orientation="vertical" />
              <NavLink
                className="navbar-item navbar-link navbar-item-text 
                navbar-item-active"
                exact
                to="/login"
              >
                {LOGIN}
              </NavLink>
              <Box
                className="navbar-item navbar-link navbar-language"
                onClick={ChangeLanguage}
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

      <Hidden mdUp>{openMenu && <HeaderResponsive items={menuItems} />}</Hidden>
    </AppBar>
  );
};

export default Navbar;
