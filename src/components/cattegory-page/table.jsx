import CategoryButton from "./category-block";
import { compose } from "redux";
import { connect } from "react-redux";
import { getCategories } from "../../store/selectors/categories";
import { loadCategories, chouseCategoie } from "../../store/action/index";
import { useEffect } from "react";

function Table({ categories, loadCategories, chouseCategoie }) {
  useEffect(() => {
    loadCategories();
  }, []);
  console.log(categories);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {categories.map((categorie) => (
        <CategoryButton
          onClick={() => chouseCategoie(categorie.id)}
          categorie={categorie}
        ></CategoryButton>
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return { categories: getCategories(state) };
}

export default connect(mapStateToProps, { loadCategories, chouseCategoie })(
  Table
);
