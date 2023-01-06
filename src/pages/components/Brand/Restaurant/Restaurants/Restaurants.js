import  Card  from "../../../UI/Card/Card.js";
import RestaurantItem from "../RestaurantItem/RestaurantItem"
import classes from "./Restaurants.module.scss";
import RestaurantsSummary from "../../Restaurant/RestaurantsSummary/RestaurantsSummary";

export default function Restaurants(props) {

  const isLoading = false

  const restaurants = [
    {
      id: "1",
      name: "Oak Ray Flower Drum Restaurant",
      description:"Chinese, Asian, Fusion",
      address: "38 Thurstan Road Colombo 03, Colombo 00300 Sri Lanka",
    },
    {
      id: "2",
      name: "Isso",
      description:"Seafood, Asian, Sri Lankan",
      address: "2 Sulaiman Terrace Green Path, Colombo 00500 Sri Lanka",
    },
    {
      id: "3",
      name: "Dolce Italia",
      description: "ItalianCafeTuscan",
      address: "5 Skelton Road, Colombo 00400 Sri Lanka",
    },
  ];
  

  return (
    <>
      <RestaurantsSummary/>  
      <Card className={classes.restaurants}>
        <ul>
          {isLoading && <li>Loading Restaurants, Please wait... </li>}
          {!isLoading &&
            Object.entries(restaurants).map(([key, value]) => (
              <RestaurantItem key={key} id={key} {...value} ></RestaurantItem>
            ))}
        </ul>
      </Card>
    </>
  );
}
