import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [payOnDelivery, setPayOnDelivery] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [options, setOptions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    placeId: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch(`http://localhost:3000/places/autocomplete?input=${formData.address}`);
      console.log(formData.address)
      if (!response.ok) return setOptions([]);
      const data = await response.json();
      const places = data.predictions;
      setOptions(places);

    }

    getPlaces();
  }, [formData.address]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (value) => {
    const placeId = value.place_id;
    const placeDescription = value.description;
    setFormData({ ...formData, address:  placeDescription, placeId: placeId});
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting order:", formData);
    alert("Order placed successfully!");
    navigate('/delivery', { state: formData })
  };

  return (
    <div className="checkout-section">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />
      <div className="dropdown-container">
      <input
        type="text"
        name="address"
        placeholder="Shipping Address"
        value={formData.address}
        onChange={handleChange}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // slight delay for click
        onFocus={() => formData.address && setShowSuggestions(true)}
        required
      />
      {showSuggestions && options.length > 0 && (
        <ul className="dropdown-list">
          {options.map((addr, index) => (
            <li key={index} onClick={() => handleSelect(addr)}>
              {addr.description}
            </li>
          ))}
        </ul>
      )}
    </div>

        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            name="payondelivery"
            checked={payOnDelivery}
            onChange={handleChange}
            required
          />
          <span>Pay on delivery</span>
        </label>

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
          disabled
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleChange}
            className="w-1/2 p-3 border rounded-xl"
            required
            disabled
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            checked={formData.cvv}
            onChange={handleChange}
            className="w-1/2 p-3 border rounded-xl"
            required
            disabled
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-xl hover:bg-gray-800"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
