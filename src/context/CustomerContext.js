import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/customers").then((res) => setCustomers(res.data));
  }, []);

  const addCustomer = (customer) => {
    axios.post("http://localhost:5000/customers", customer).then((res) => {
      setCustomers([...customers, res.data]);
    });
  };

  const deleteCustomer = (id) => {
    axios.delete(`http://localhost:5000/customers/${id}`).then(() => {
      setCustomers(customers.filter((customer) => customer.id !== id));
    });
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
