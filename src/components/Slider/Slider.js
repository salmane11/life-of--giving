import styles from "./Slider.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useCallback, useEffect, useState } from "react";

function Slider() {
  const [imageCounter, setImageCounter] = useState(1);

  /**these two handlers are used to handle images on the slider
   * when the forward icon is clicked the couter is upgraded to counter+1
   * or going down to 1
   */
  const backHandler = () => {
    if (imageCounter === 1) {
      setImageCounter(5);
    } else {
      setImageCounter((counter) => counter - 1);
    }
  };
  const forwardHandler = useCallback(() => {
    if (imageCounter === 5) {
      setImageCounter(1);
    } else {
      setImageCounter((counter) => counter + 1);
    }
  }, [imageCounter]);

  //use Effect is used to handle the time of replacing images every 10 seconds;
  //and the cleartimeout is used to clear the timer when the componenet is unmounted when we pass to another page for example
  //the componenet is deleted from the DOM
  useEffect(() => {
    const timer = setTimeout(forwardHandler, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [forwardHandler]);

  return (
    <div className={styles.slider}>
      <ArrowBackIcon onClick={backHandler} />
      <img src={`/images/${imageCounter}.jpg`} alt="first" />
      <ArrowForwardIcon onClick={forwardHandler} />
    </div>
  );
}
export default Slider;
