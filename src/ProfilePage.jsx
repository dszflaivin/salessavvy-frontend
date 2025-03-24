/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/styles.css';
import { Header } from './Header';
import { Footer } from './Footer';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/profile`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user:', error));

    // Fetch order history
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, {
      method: 'GET',
      credentials: 'include',
    })
    .then((response) => response.json())
  .then((data) => {
    // Extract orders array from the response object
    if (data.products) {
      setOrders(data.products);
    } else {
      console.error('Orders not found in response:', data);
    }
  })
  .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="maindiv">
    <div className="customer-homepage">
      <Header username={user ? user.name : 'Guest'}
  cartCount={0} />
    <div className="profile-page">
      <h2>Profile</h2>
      {user ? (
        <div className="profile-details">
          <img src={user.avatar || 'src/useravatar.png'} alt="User Avatar" className="profile-avatar" />
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>

        </div>
      ) : (
        <p>Loading user details...</p>
      )}

      <h3>Order History</h3>
      {orders.length > 0 ? (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.product_id}>
           <img src={order.image_url} alt={order.name} className="order-image" />
            <p><strong>Product Name:</strong> {order.name}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Total Price:</strong> ${order.total_price}</p>
            </li>
          ))}
        </ul>
      ) : (
    <p>No orders found.</p>
    )}

    </div>
    <Footer />
  </div>
  </div>
  );
}
