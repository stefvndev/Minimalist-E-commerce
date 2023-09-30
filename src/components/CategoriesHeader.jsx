import { IconChevronLeft } from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../pages/ProductPage";

function CategoriesHeader() {
  const {btnName, setBtnName} = useContext(CartContext);

  const location = useLocation();
  
  useEffect(() => {
    // Check if the current location is the "categories/all" page and set btnName accordingly
    const currentCategory = location.pathname.slice(1); // Remove the leading slash
    if (currentCategory === "categories/all") {
      setBtnName("All");
    }
  }, [location.pathname, setBtnName]); // Include the dependencies in the array


  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <IconChevronLeft /> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="furnitures">
              <button onClick={() => handleBtnName("furnitures")}>
                Furnitures
              </button>
            </Link>
            <Link to="electronics">
              <button onClick={() => handleBtnName("electronics")}>
                Electronics
              </button>
            </Link>
            <Link to="lamps">
              <button onClick={() => handleBtnName("lamps")}>Lamps</button>
            </Link>
            <Link to="kitchen">
              <button onClick={() => handleBtnName("kitchen")}>Kitchen</button>
            </Link>
            <Link to="chairs">
              <button onClick={() => handleBtnName("chairs")}>Chairs</button>
            </Link>
            <Link to="skin-care">
              <button onClick={() => handleBtnName("skin care")}>
                Skin Care
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
