import React, { useState } from "react";
import "./Checkout.css";

export default function CheckoutPage() {
  const [payOnDelivery, setPayOnDelivery] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting order:", formData);
    alert("Order placed successfully!");
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
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />
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
