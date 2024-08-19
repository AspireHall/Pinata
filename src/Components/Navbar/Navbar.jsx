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
          <div className={classes.contract}>
            <h className={classes.contractText}>
              Contract Address
              <br />
              0xd707e187dFe1c3c5311D0Acb2D631332B4Bd3dEF
            </h>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
