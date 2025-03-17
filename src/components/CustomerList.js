import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";
import "../styles.css";  // Import custom CSS

const CustomerList = () => {
  const { customers, deleteCustomer } = useContext(CustomerContext);

  return (
    <div className="customer-list-container">
      <h2 className="customer-list-title">Customers</h2>
      <ul className="customer-list">
        {customers.map((customer) => (
          <li key={customer.id} className="customer-item">
            {customer.name}
            <button onClick={() => deleteCustomer(customer.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
