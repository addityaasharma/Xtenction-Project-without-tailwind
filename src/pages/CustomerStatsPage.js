import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";
import "../styles.css"

const CustomerStatsPage = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div className="customer-stats">
      <h1>Customer Stats</h1>
      <p>Total Customers: {customers.length}</p>
    </div>
  );
};

export default CustomerStatsPage;
