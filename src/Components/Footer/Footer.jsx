import chicken from "../../assets/Pinata Coin.webp";
import x from "../../assets/X_Twiter_logo.jpg";
import telegram from "../../assets/telegram.png";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.topContainer}>
        <div className={classes.leftContainer}>
          <img className={classes.chicken} src={chicken} />
          <h1 className={classes.text}>Piñata</h1>
        </div>
        <div className={classes.rightContainer}>
          <a href="https://x.com/Pinata_Coin">
            <img className={classes.twitter} src={x} />
          </a>
          <a href="https://t.me/+l9WOmDKLPXMyMDMx">
            <img className={classes.telegram} src={telegram} />
          </a>
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <h4 className={classes.smallText}>
          $Pina is a meme coin, and there is no expectation of intrinsic value.
          There is no formal team but a solo creator who loves pinatas.
          <br></br>The coin was created to share the joy of Pinatas to the
          digital world and bring happiness to a world full of useless
          memecoins.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
