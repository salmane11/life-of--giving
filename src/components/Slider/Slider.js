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
  },[imageCounter]);

  //use Effect is used to handle the time of replacing images every 4 seconds;
  useEffect(()=>{
    setTimeout(forwardHandler,10000);
  },[forwardHandler])

  return (
    <div className={styles.slider}>
      <ArrowBackIcon onClick={backHandler} />
      <img src={`/images/${imageCounter}.jpg`} alt="first" />
      <ArrowForwardIcon onClick={forwardHandler} />
    </div>
  );
}
export default Slider;
