import { CDN_URL } from "../utils/constants";

const Restrocards = (props) => {
  const { resdata } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resdata?.info;
  return (
    <div
    data-testid="restroCards"
      className="m-4 p-4 w-[240px]  bg-gray-100 rounded-lg hover:shadow-xl hover:bg-gray-300" /*style={stylecard} -inline css*/
    >
      <img
        className="rounded-lg"
        alt="Image"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{resdata.info.sla.deliveryTime} Mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (Restrocards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-4 p-2 rounded-lg bg-black text-white">
          Pure Veg 🍀
        </label>
        <Restrocards {...props} />
      </div>
    );
  };
};
export default Restrocards;
