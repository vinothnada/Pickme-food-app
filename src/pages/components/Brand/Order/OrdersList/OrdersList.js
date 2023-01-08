import Card from "../../../UI/Card/Card.js";
import OrderItem from "../OrderItem/OrderItem";
import classes from "./OrdersList.module.scss";
import OrdersSummary from "../OrdersSummary/OrdersSummary";
import { useEffect, useState } from "react";
import API from "../../../../../util/API.js";

export default function OrdersList(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      setIsLoading(true);
      const response = await API.get("/order/getorders");
      setOrders(
        response.data.map((order, index) => ({
          id: order.order_id,
          name: `Order ${index + 1}`,
          status: order.status,
        }))
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <OrdersSummary />
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
