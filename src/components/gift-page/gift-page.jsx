import GiftButton from "./gift";
import { compose } from "redux";
import { connect } from "react-redux";
import { getGifts } from "../../store/selectors/categories";
import { loadGifts } from "../../store/action/index";
import { useEffect } from "react";

function TableGift({ gifts, loadGifts }) {
  useEffect(() => {
    loadGifts();
  }, []);
  console.log(gifts);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "#F9FAFB",
      }}
    >
      {gifts.map((gift) => (
        <GiftButton gift={gift}></GiftButton>
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return { gifts: getGifts(state) };
}

export default connect(mapStateToProps, { loadGifts })(TableGift);
