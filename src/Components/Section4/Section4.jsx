import yellowCircle from "../../assets/yellow circle.png";
import redCircle from "../../assets/red circle.png";
import blueCircle from "../../assets/blue circle.png";
import classes from "./Section4.module.css";
const Section4 = () => {
  return (
    <div className={classes.section4Container}>
      <div className={classes.bodyContainer}>
        <div>
          <h1 className={classes.bodyFont}>Roadmap</h1>
        </div>
        <div className={classes.bulletContainer}>
          <img className={classes.circle} src={redCircle} />
          <h1 className={classes.text}>Phase1: Piñata Release to Market</h1>
        </div>
        <div className={classes.bulletContainer}>
          <img className={classes.circle} src={blueCircle} />
          <h1 className={classes.text}>
            Phase 2: HODL and Receive Lucky Piñata Drops
          </h1>
        </div>
        <div className={classes.bulletContainer}>
          <img className={classes.circle} src={yellowCircle} />
          <h1 className={classes.text}>
            Phase 3: Gum Drops (increase odds of Piñata Rewards), Buy-Back &
            Burn, Future projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section4;
