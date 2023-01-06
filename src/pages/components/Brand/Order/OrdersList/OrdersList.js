import  Card  from "../../../UI/Card/Card.js";
import  OrderItem  from "../OrderItem/OrderItem";
import classes from "./OrdersList.module.scss";
import OrdersSummary from '../OrdersSummary/OrdersSummary'

export default function OrdersList(props) {

  const isLoading = false

  const orders = [
    {
      id: "o1",
      name: "Order1",
      status: "Pending",
    },
    {
      id: "o2",
      name: "Order1",
      status: "Preparing",
    },
    {
      id: "o3",
      name: "Order1 Burger",
      status: "On the Way",
    },
    {
      id: "o4",
      name: "Order1",
      status: "Delivered",
    },
  ];
  

  return (
    <>
    <OrdersSummary/>  
    <Card className={classes.orders}>
      <ul>
        {isLoading && <li>Loading orders, Please wait... </li>}
        {!isLoading &&
          Object.entries(orders).map(([key, value]) => (
            <OrderItem key={key} id={key} {...value}></OrderItem>
          ))}
      </ul>
    </Card>
    </>
  );
}
