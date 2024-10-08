import classes from "./app.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <div className={classes.mainContainer}>
        <Navbar />
        <div className={classes.bodyContainer}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
