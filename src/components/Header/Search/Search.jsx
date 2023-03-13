import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>

      <div className="searcg-result-content">
        <div className="search-result">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
            <div className="prod-details">
          <span className="name">Product name</span>
          <span className="desc">Product description</span>
        </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Search;
