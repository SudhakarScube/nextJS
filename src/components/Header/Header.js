import React, { useState, useEffect, Fragment } from "react";
import {
  Box,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Header = ({ data, ...props }) => {
  // /**** menu open/close function mobile *****/
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [MenuOpen, SetMenuOpen] = useState(true);
  const open = Boolean(anchorEl);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFixedHeader(window.scrollY > 30);
    });
    //  if (!loading && !authUser) router.push("/");
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    SetMenuOpen(false);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const logoUrl = data?.ImgSource;
  const logoAltText = data?.fileName;
  const logoTitle = data?.logoTitle;
  const menu = data?.menuItems;

  const [indexs, setIndexs] = useState();
  return (
    <AppBar
      className={`header ${fixedHeader ? "fixed-header" : ""} ${
        props?.class ? props?.class : ""
      }`}
      sx={{ padding: 0 }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between" }}
          disableScrollLock
        >
          <Box component={"div"} sx={{ display: "flex", alignItems: "center" }}>
            {/*  logo section starts */}
            <Link
              href={"/"}
              style={{
                flexGrow: 1,
                pr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {logoUrl && (
                <Image
                  title={logoTitle}
                  className="logo"
                  width={103}
                  height={35}
                  alt={logoAltText}
                  src={`${logoUrl}`}
                />
              )}
            </Link>
            {/* logo section end */}

            {/* desktop menu starts */}
            <Box
              component={"div"}
              className="menu-column"
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex", alignItems: "center" },
              }}
            >
              {menu &&
                menu?.map((pages, index) => {
                  const handleClick = (event) => {
                    setAnchorEl(event.currentTarget);
                    setIndexs(index);
                  };
                  const handleClose = () => {
                    setAnchorEl(null);
                  };

                  return (
                    <Fragment key={index}>
                      {pages?.MenuList === "megamenu" ? (
                        <>
                          <Button
                            id={pages?.menuName}
                            onClick={handleClick}
                            className="main-menu "
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            aria-label={pages?.menuName}
                            disableRipple
                            endIcon={
                              indexs === index && open === true ? (
                                <KeyboardArrowUpIcon />
                              ) : (
                                <KeyboardArrowDownIcon />
                              )
                            }
                            sx={{
                              my: 2,
                              color: "white",
                              display: "block",
                              textTransform: "none",
                            }}
                          >
                            {pages?.menuName}
                          </Button>

                          {indexs === index && (
                            <Menu
                              id="basic-menu"
                              className={`basic_menu menu_${pages?.MenuList}`}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                              sx={{ minWidth: 0 }}
                              disableScrollLock
                            >
                              <Container>
                                {/* <HeaderMenuRef SubMenuData={pages.SubMenuData} /> */}

                                {pages?.SubMenuData?.MenuData && (
                                  <MenuItem
                                    className="Mui-menuitems"
                                    onClick={handleClose}
                                    disableRipple
                                    disableFocusRipple
                                    sx={{ alignItems: "baseline" }}
                                  >
                                    <Container>
                                      <Grid container>
                                        {pages?.SubMenuData?.MenuData?.map(
                                          (item, index) => {
                                            return (
                                              <Grid item md={4} key={index}>
                                                <Box sx={{ display: "block" }}>
                                                  <Typography
                                                    variant={
                                                      item?.ListTitlevariant
                                                    }
                                                    className="mega-menu-title"
                                                  >
                                                    {item?.ListTitle}
                                                  </Typography>

                                                  <List
                                                    // className="Mui-menuitems"
                                                    onClick={handleClose}
                                                    disableRipple
                                                    disableFocusRipple
                                                    sx={{
                                                      display: "block",
                                                    }}
                                                  >
                                                    {item?.SubList?.map(
                                                      (items, index) => {
                                                        return (
                                                          <ListItem
                                                            key={index}
                                                            sx={{
                                                              display: "flex",
                                                              alignItems:
                                                                "baseline",
                                                            }}
                                                          >
                                                            <Link
                                                              href={items?.Link}
                                                            >
                                                              <Grid container>
                                                                <Grid
                                                                  item
                                                                  md={1}
                                                                  sx={{
                                                                    marginRight:
                                                                      " 16px",
                                                                  }}
                                                                >
                                                                  <Image
                                                                    src={
                                                                      items?.logo
                                                                    }
                                                                    alt={"logo"}
                                                                    width={24}
                                                                    height={24}
                                                                    className="mega-icon-logo"
                                                                  />
                                                                </Grid>
                                                                <Grid
                                                                  item
                                                                  md={10}
                                                                  className="mega-menu-content"
                                                                >
                                                                  <ListItemButton
                                                                    // component="a"
                                                                    // href={
                                                                    //   items?.Link
                                                                    // }
                                                                    sx={{
                                                                      padding: 0,
                                                                      display:
                                                                        "block",
                                                                    }}
                                                                  >
                                                                    {items?.primaryText && (
                                                                      <ListItemText
                                                                        primary={
                                                                          items?.primaryText
                                                                        }
                                                                        className="mega-menu-list"
                                                                      />
                                                                    )}

                                                                    {items?.description && (
                                                                      <Typography
                                                                        component="p"
                                                                        className="description"
                                                                        dangerouslySetInnerHTML={{
                                                                          __html:
                                                                            items?.description,
                                                                        }}
                                                                      />
                                                                    )}
                                                                  </ListItemButton>
                                                                </Grid>
                                                              </Grid>
                                                            </Link>
                                                          </ListItem>
                                                        );
                                                      }
                                                    )}
                                                  </List>
                                                </Box>
                                              </Grid>
                                            );
                                          }
                                        )}{" "}
                                      </Grid>
                                    </Container>
                                  </MenuItem>
                                )}
                              </Container>
                            </Menu>
                          )}
                        </>
                      ) : (
                        <Link
                          id={pages?.menuName}
                          onClick={handleOpenNavMenu}
                          className="main-menu "
                          href={pages?.url ? pages?.url : ""}
                          aria-label={pages?.menuName}
                          sx={{
                            my: 2,
                            color: "white",
                            display: "block",
                            textTransform: "none",
                          }}
                        >
                          {pages?.menuName}
                        </Link>
                      )}
                    </Fragment>
                  );
                })}
            </Box>
          </Box>
          {/* mobile menu starts */}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Menu Icon"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="mobile-menu-bar"
            >
              <MenuIcon />
            </IconButton>
            {MenuOpen === false && (
              <Menu
                className="mobile-menu-view"
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                    top: 0,
                  },
                  minWidth: 0,
                }}
              >
                <MenuItem>
                  <Box component={"div"} sx={{ width: "100%" }}>
                    {menu &&
                      menu?.map((pages, index) => {
                        const handleClick = (event) => {
                          setAnchorEl(event.currentTarget);
                          SetMenuOpen(true);
                          setIndexs();
                        };
                        const handleClickmegaMenu = (event) => {
                          setAnchorEl(event.currentTarget);
                          SetMenuOpen(false);
                          setIndexs(index);
                        };
                        const handleClose = () => {
                          setAnchorEl(null);
                        };
                        return (
                          <Fragment key={index}>
                            {pages?.MenuList === "megamenu" ? (
                              <>
                                <Button
                                  id={pages?.menuName}
                                  onClick={handleClickmegaMenu}
                                  className="main-menu "
                                  aria-controls={
                                    open ? "basic-menu" : undefined
                                  }
                                  aria-haspopup="true"
                                  aria-expanded={open ? "true" : undefined}
                                  aria-label={pages?.menuName}
                                  disableRipple
                                  endIcon={
                                    indexs === index && open === true ? (
                                      <KeyboardArrowUpIcon />
                                    ) : (
                                      <KeyboardArrowDownIcon />
                                    )
                                  }
                                  sx={{
                                    color: "white",
                                    textTransform: "none",
                                    width: "100%",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  {pages?.menuName}
                                </Button>

                                {indexs === index && (
                                  <Menu
                                    id="basic-menu"
                                    className={`basic_menu menu_${pages?.MenuList}`}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                      "aria-labelledby": "basic-button",
                                    }}
                                    sx={{ minWidth: 0 }}
                                    disableScrollLock
                                  >
                                    {pages?.SubMenuData?.MenuData && (
                                      <MenuItem
                                        className="Mui-menuitems"
                                        onClick={handleClose}
                                        disableRipple
                                        disableFocusRipple
                                        sx={{ alignItems: "baseline" }}
                                      >
                                        <Grid container>
                                          {pages?.SubMenuData?.MenuData?.map(
                                            (item, index) => {
                                              return (
                                                <Grid item md={4} key={index}>
                                                  <Box
                                                    sx={{ display: "block" }}
                                                  >
                                                    <Typography
                                                      variant={
                                                        item?.ListTitlevariant
                                                      }
                                                      className="mega-menu-title"
                                                    >
                                                      {item?.ListTitle}
                                                    </Typography>

                                                    <List
                                                      className="Mui-menuitems"
                                                      onClick={handleClick}
                                                      disableRipple
                                                      disableFocusRipple
                                                      sx={{
                                                        display: "block",
                                                      }}
                                                    >
                                                      {item?.SubList?.map(
                                                        (items, index) => {
                                                          return (
                                                            <ListItem
                                                              key={index}
                                                              sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                  "initial",
                                                              }}
                                                            >
                                                              <Box>
                                                                <Image
                                                                  src={
                                                                    items?.logo
                                                                  }
                                                                  alt={"logo"}
                                                                  width={24}
                                                                  height={24}
                                                                  className="mega-icon-logo"
                                                                />
                                                              </Box>
                                                              <Box className="mega-menu-content">
                                                                <Link
                                                                  href={
                                                                    items?.Link
                                                                  }
                                                                  style={{
                                                                    padding: 0,
                                                                  }}
                                                                >
                                                                  {items?.primaryText && (
                                                                    <ListItemText
                                                                      primary={
                                                                        items?.primaryText
                                                                      }
                                                                      className="mega-menu-list"
                                                                    />
                                                                  )}
                                                                  {items?.description && (
                                                                    <Typography
                                                                      component="p"
                                                                      className="description"
                                                                      dangerouslySetInnerHTML={{
                                                                        __html:
                                                                          items?.description,
                                                                      }}
                                                                    />
                                                                  )}
                                                                </Link>
                                                              </Box>
                                                            </ListItem>
                                                          );
                                                        }
                                                      )}
                                                      {/* </List> */}
                                                    </List>
                                                  </Box>
                                                </Grid>
                                              );
                                            }
                                          )}
                                        </Grid>
                                      </MenuItem>
                                    )}
                                  </Menu>
                                )}
                              </>
                            ) : (
                              <Link
                                id={pages?.menuName}
                                onClick={handleClick}
                                className="main-menu "
                                href={pages?.url ? pages?.url : ""}
                                aria-label={pages?.menuName}
                                onClose={handleClose}
                              >
                                {pages?.menuName}
                              </Link>
                            )}
                          </Fragment>
                        );
                      })}
                  </Box>
                </MenuItem>
                <MenuItem>
                  <Box
                    className="header-right "
                    sx={{ width: "100%", flexGrow: 0 }}
                  >
                    {data?.ButtonData?.map((item, index) => {
                      return (
                        <Link
                          variant="contained"
                          className="button-myyellow"
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                          href={item?.buttonLink}
                          aria-label={item?.buttonName}
                        >
                          {item?.buttonName}
                        </Link>
                      );
                    })}
                  </Box>
                </MenuItem>
              </Menu>
            )}
          </Box>
          {/* mobile menu ends */}
          <Box
            className="header-right header-button"
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {/* desktop button */}
            {data?.ButtonData?.map((item, index) => {
              return (
                <Link
                  variant="contained"
                  className="button-login"
                  // target="_blank"
                  rel="noreferrer"
                  key={index}
                  style={{
                    backgroundColor: item?.backgroundColor,
                    color: item?.textColor,
                    textTransform: "inherit",
                  }}
                  href={item?.buttonLink}
                  aria-label={item?.buttonName}
                >
                  {item?.buttonName}
                </Link>
              );
            })}

            {/* desktop  button end*/}
          </Box>

          {/* desktop menu ends */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
