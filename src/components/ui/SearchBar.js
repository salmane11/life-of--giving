import Button from "./Button";
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props){
    return(
        <form className={`${styles.searchbar} ${props.className}`}>
            <SearchIcon/>
            <input type="text" placeholder="Search" />
            <Button>Search</Button>
        </form>
    )
}
export default SearchBar;