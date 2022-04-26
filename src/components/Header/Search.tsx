import { BsSearch } from "react-icons/bs";
import "../../components/Header/Search.css";

const Search = () => {
  return (
    <>
      {/* <div className="search__box">
        <Form id="search__deco" className="search__txt">
          <FormControl type="search" placeholder="Search" aria-label="Search" />
        </Form>
        <BsSearch className="search__btn" />
      </div> */}
      <div className="search__box">
        <input
          className="search__txt"
          type="text"
          name=""
          placeholder="Type to search"
        />
        <BsSearch className="search__btn" />
      </div>
    </>
  );
};
export default Search;
