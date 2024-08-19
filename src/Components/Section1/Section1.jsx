import classes from "./Section1.module.css";
import logo from "../../assets/Pinata Coin.webp";
import redCircle from "../../assets/red circle.png";
import purpleCircle from "../../assets/purple circle.png";
import orangeCircle from "../../assets/orange circle.png";
import yellowCircle from "../../assets/yellow circle.png";
import greenCircle from "../../assets/green circle.png";

const Section1 = () => {
  return (
    <>
      <div className={classes.section1Container}>
        <div className={classes.leftSectionContainer}>
          <img className={classes.circleleft} src={redCircle} />
          <img className={classes.circleright} src={purpleCircle} />
          <img className={classes.circleleft} src={orangeCircle} />
          <img className={classes.circleright} src={yellowCircle} />
          <img className={classes.circleleft} src={greenCircle} />
        </div>
        <div className={classes.middleSectionContainer}>
          <h1 className={classes.bodyFont}>Pina</h1>
          <h2 className={classes.text}>
            The Piñata memecoin is here to spread its joy to everyone. When you
            break a Piñata, all the goods come rushing out and everyone has a
            chance to earn some goodies. The official digital Piñata that drops
            coins instead of candy. Participate in the Piñata party by buying
            Piñata.
          </h2>
        </div>
        <div className={classes.rightSectionContainer}>
          <img className={classes.logobody} src={logo}></img>
        </div>
      </div>
    </>
  );
};

export default Section1;
