import CustomerList from "../components/CustomerList";
import CustomerForm from "../components/CustomerForm";
import "../styles.css"

const CustomerManagement = () => {
  return (
    <div className="main-content">
      <h1>Customer Management</h1>
      <CustomerForm />
      <div className="customer-list">
        <CustomerList />
      </div>
    </div>
  );
};

export default CustomerManagement;
