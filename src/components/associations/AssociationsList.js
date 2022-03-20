import Button from "../ui/Button";
import SearchBar from "../ui/SearchBar";
import Association from "./Association";
import styles from "./AssociationsList.module.css";
import { useState, useEffect } from "react";
import useHttp, { organizationshost } from "../../store/requests";

const associations = [
  {
    associationId: 1,
    image: "/images/logo.png",
    name: "AL Yussr",
    category: "orphelin",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 2,
    image: "/images/logo1.png",
    name: "Attadamoun foundation",
    category: "category",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 3,
    image: "/images/logo2.png",
    name: "Childhood happyiness",
    category: "children",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 4,
    image: "/images/logo3.png",
    name: "Angels foundation",
    category: "children",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 5,
    image: "/images/logo4.png",
    name: "AL Yussr",
    category: "orphelin",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 6,
    image: "/images/logo5.png",
    name: "Homelessness foundation",
    category: "homelessness",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 7,
    image: "/images/logo.png",
    name: "AL Yussr",
    category: "orphelin",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 8,
    image: "/images/logo1.png",
    name: "Attadamoun foundation",
    category: "category",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 9,
    image: "/images/logo2.png",
    name: "Childhood happyiness",
    category: "children",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 10,
    image: "/images/logo3.png",
    name: "Angels foundation",
    category: "orphelin",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 11,
    image: "/images/logo4.png",
    name: "AL Yussr",
    category: "orphelin",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
  {
    associationId: 12,
    image: "/images/logo5.png",
    name: "Homelessness foundation",
    category: "homelessness",
    location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
    number: "+21212345678",
  },
];

function AssociationsList() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filterHandler = (event) => {
    setSelectedFilter(event.target.value);
  };

  //use an existing custom hook for http requests to get all verified associations
  const { isLoading, error, sendRequest: getAssociations } = useHttp();

  useEffect(()=>{
    getAssociations(
      {
        url: organizationshost+"/organisations/verified",
        method: "get",
        headers: { "Content-Type": "Application/json" },
      },
      (object)=>{console.log(object);}
    )
  },[getAssociations]);

  const [filteredAssociations, setFilteredAssociations] = useState(associations);
  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredAssociations(associations);
    } else if (selectedFilter === "other") {
      setFilteredAssociations(
        associations.filter(
          (association) =>
            association.category !== "orphelin" &&
            association.category !== "homelessness" &&
            association.category !== "children" &&
            association.category !== "constructions"
        )
      );
    } else {
      setFilteredAssociations(
        associations.filter(
          (association) => association.category === selectedFilter
        )
      );
    }
  }, [selectedFilter]);

  return (
    <div className={styles.associations}>
      <h1>Browse community fund raisers</h1>$
      <div className={styles.searchfilter}>
        <SearchBar className={styles.searchbar} />
        <form className={styles.filter}>
          <label>filter</label>
          <select value={selectedFilter} onChange={filterHandler}>
            <option valeur="all">all</option>
            <option valeur="orphelin">orphelin </option>
            <option valeur="homelesseness">homelessness</option>
            <option valeur="children">children </option>
            <option valeur="constructions">constructions</option>
            <option valeur="other">other</option>
          </select>
        </form>
      </div>
      {isLoading && <p>isLoading ...</p>}
      {error && <p>{error}</p>}
      <div className={styles.list}>
        {filteredAssociations.map((association) => (
          <Association
            key={association.associationId}
            src={association.image}
            associationName={association.name}
            associationCategory={association.category}
            associationLocation={association.location}
            associationNumber={association.number}
          />
        ))}
      </div>
      <Button className={styles.showbutton}>Show More</Button>
    </div>
  );
}
export default AssociationsList;
