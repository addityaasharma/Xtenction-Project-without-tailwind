import { useState, useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";
import "../styles.css";  // Import custom CSS

const CustomerForm = () => {
  const [name, setName] = useState("");
  const { addCustomer } = useContext(CustomerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return; // Prevent empty submissions
    addCustomer({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      <input
        type="text"
        placeholder="Enter Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="customer-input"
      />
      <button type="submit" className="customer-button">Add</button>
    </form>
  );
};

export default CustomerForm;
