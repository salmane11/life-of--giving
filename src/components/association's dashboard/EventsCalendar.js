import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./EventsCalendar.module.css";

function EventsCalendar() {
  const eventsDates = [new Date(2022, 2, 28), new Date(2022, 2, 18)];
  return (
    <div className={styles.events}>
      <h1>Upcoming events</h1>
      <Calendar className={styles.mycalendar} value={eventsDates} />
    </div>
  );
}
export default EventsCalendar;
