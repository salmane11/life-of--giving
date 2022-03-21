import styles from "./Table.module.css";


function Table(props){
    return(
        <div className={styles.container}>
            <div className={styles.title}><h1>{props.name}</h1></div>
            <div className={styles.table}>
            <table >
        <tr>
          <th>Organization name</th>
          <th>Project’s name</th>
          <th>Donation</th>
          <th>Date</th>

        </tr>
        {props.data.map((element, key) => {
          return (
            <tr key={key}>
              <td>{element.association_name}</td>
              <td>{element.title}</td>
              <td>{element.donation_amount}</td>
              <td>{element.donation_date}</td>

            </tr>
          )
        })}
      </table>
      </div>
        </div>
    );

}
export default Table;