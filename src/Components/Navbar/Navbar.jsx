import classes from "./Navbar.module.css";
import logo from "../../assets/Pinata Coin.webp";

const Navbar = () => {
  return (
    <>
      <div className={classes.topContainer}>
        <div className={classes.leftContainer}>
          <img className={classes.logo} src={logo}></img>
          <h1 className={classes.mainFont}>Piñata</h1>
        </div>
        <div className={classes.rigthContainer}>
          <button className={classes.buyButton}>Coming Soon</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
