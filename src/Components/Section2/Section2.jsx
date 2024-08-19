import classes from "./Section2.module.css";
import greenCircle from "../../assets/green circle.png";
import purpleCircle from "../../assets/purple circle.png";
import violetCircle from "../../assets/violet cirlce.png";
import orangeCircle from "../../assets/orange circle.png";
import yellowCircle from "../../assets/yellow circle.png";
import redCircle from "../../assets/red circle.png";
import blueCircle from "../../assets/blue circle.png";

const Section2 = () => {
  return (
    <div className={classes.section2Container}>
      <div className={classes.topSectionContainer}>
        <div className={classes.circleContainer}>
          <img className={classes.circleTop} src={redCircle} />
        </div>
        <div className={classes.circleContainer}>
          <img className={classes.circleBottom} src={orangeCircle} />
        </div>
        <div className={classes.circleContainer}>
          <img className={classes.circleTop} src={yellowCircle} />
        </div>
        <div className={classes.circleContainer}>
          <img className={classes.circleBottom} src={greenCircle} />
        </div>
        <div className={classes.circleContainer}>
          <img className={classes.circleTop} src={blueCircle} />
        </div>
        <div className={classes.circleContainer}>
          <img className={classes.circleBottom} src={purpleCircle} />
        </div>
        <div className={classes.circleContainer}>
          <img className={classes.circleTop} src={violetCircle} />
        </div>
      </div>
      <div className={classes.bottomSectionContainer}>
        <div className={classes.headingContainer}>
          <div className={classes.aboutContainer}>
            <h1 className={classes.bodyFont}>About</h1>
          </div>
        </div>
        <div className={classes.bodyContainer}>
          <div className={classes.textContainer}>
            <h2 className={classes.text}>
              Piñata is for everyone, the little guy, the Middle Guy, and even
              the BIG GUY. Just like a Piñata party, everybody has a chance to
              swing and break open the Piñata. The more participate in Piñata,
              the higher the reward rate. When Piñata is bough or sold, the 3%
              Tax is collected and this is used to reward randomized lucky
              holders on a constant basis as long as they hold Piñata in their
              wallet. 95% of the Total Supply is release to the Market. Less
              than 1 percent will be use to fund the initial Liquidity and LP
              tokens will be burn. Then the Piñata Machine will operate on its
              own
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
