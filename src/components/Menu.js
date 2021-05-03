const Menu = [
  {
    label: "Home",
    pathname: "/"
  },
  {
    label: "New Quote wizard",
    pathname: "/wizard"
  },
  {
    label: "Quote Dashboard",
    pathname: "/dashboard"
  },
  {
    label: "Signup",
    pathname: "/signup"
  },
  
  {
    label: "Cards",
    pathname: "/cards",
    submenu: {
      label: "sub menu1",
      pathname: "/submenu1"
    }
  }
];

export default Menu;
