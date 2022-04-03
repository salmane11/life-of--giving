import Button from "../ui/Button";
import SearchBar from "../ui/SearchBar";
import Association from "./Association";
import styles from "./AssociationsList.module.css";
import { useState, useEffect, useContext } from "react";
import useHttp, { organizationshost } from "../../store/requests";
import userContext from "../../store/userContext";

function AssociationsList() {
  const userctx = useContext(userContext);

  const [selectedFilter, setSelectedFilter] = useState("all");
  const filterHandler = (event) => {
    setSelectedFilter(event.target.value);
  };

  const [loadedAssociations, setLoadedAssociations] = useState([]);
  const transformAssociations = (list) => {
    console.log(list);
    const associations = [];
    for (var key in list) {
      associations.push({
        associationId: list[key].id,
        image: list[key].image ? list[key].image : "/images/inko.png",
        name: list[key].name,
        category: list[key].category,
        location: "ALIRFANE, Rabat, Rabat-Salé-Kenitra, Maroc",
        number: "+21212345678",
      });
    }
    setLoadedAssociations(associations);
  };

  //use an existing custom hook for http requests to get all verified associations
  const { isLoading, error, sendRequest: getAssociations } = useHttp();

  useEffect(() => {
    getAssociations(
      {
        url: organizationshost + "/organisations/verified",
        method: "get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: userctx.userToken,
        },
      },
      transformAssociations
    );
  }, [getAssociations, userctx.userToken]);

  const [filteredAssociations, setFilteredAssociations] =
    useState(loadedAssociations);
  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredAssociations(loadedAssociations);
    } else if (selectedFilter === "other") {
      setFilteredAssociations(
        loadedAssociations.filter(
          (association) =>
            association.category !== "orphelin" &&
            association.category !== "homelessness" &&
            association.category !== "children" &&
            association.category !== "constructions"
        )
      );
    } else {
      setFilteredAssociations(
        loadedAssociations.filter(
          (association) => association.category === selectedFilter
        )
      );
    }
  }, [selectedFilter, loadedAssociations]);

  return (
    <div className={styles.associations}>
      <h1>Browse community fund raisers</h1>
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
