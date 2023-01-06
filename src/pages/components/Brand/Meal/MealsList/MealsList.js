import  Card  from "../../../UI/Card/Card.js";
import  MealItem  from "../MealItem/MealItem";
import classes from "./MealsList.module.scss";
import MealsSummary from '../MealsSummary/MealsSummary'

export default function MealsList(props) {

  const isLoading = false

  const meals = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 500,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 1000,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 650,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 450,
    },
  ];
  

  return (
    <>
    <MealsSummary/>  
    <Card className={classes.meals}>
      <ul>
        {isLoading && <li>Loading meals, Please wait... </li>}
        {!isLoading &&
          Object.entries(meals).map(([key, value]) => (
            <MealItem key={key} id={key} {...value}></MealItem>
          ))}
      </ul>
    </Card>
    </>
  );
}
