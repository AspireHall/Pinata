import classes from "./Section3.module.css";
import chicken from "../../assets/chicken pinatas.png";

const Section3 = () => {
  return (
    <div className={classes.section3Container}>
      <div className={classes.topContainer}>
        <div className={classes.topLeftContainer}></div>
        <div className={classes.topRightContainer}>
          <img src={chicken} className={classes.chickenImage} />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.bodyContainer}>
          <h1 className={classes.bodyFont}>Tokenomics</h1>
          <h2 className={classes.text}>Token Supply: 777,777,777</h2>
          <h2 className={classes.text}>Token Symbol: Pina</h2>
          <h2 className={classes.bodyText}>
            Keeping it simple. The number 7 represents completeness and
            perfection. LP Token are burnt and contract ownership has been
            revoked. Piñata Rewards is fueled by its 3% Taxes that is used to
            rewards its holders randomly. The higher the transaction rate or
            amount, the higher the rewards.
            <br></br>
            <br></br>
            Say “NO” to Trillion Token Supply memecoins
            <br></br>
            <br></br>
            98% Release to Market: 1% Treasury : 1% Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section3;
