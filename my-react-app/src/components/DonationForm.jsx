import "./DonationForm.css";
const DonationForm = () => {
  return (
    <div className="donation-form" style={{marginTop:"75px"}}>
      <h2 className="form-head">Donate Essential Items</h2>
      <p>
        Your donation can make a difference! Please fill out the form below to
        contribute essential items for those in need.
      </p>

      <form action="/submit_donation" method="post">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Your Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="category">Select Donation Type:</label>
        <select id="category" name="category" required>
          <option value="">--Select--</option>
          <option value="food">Food</option>
          <option value="clothes">Clothes</option>
          <option value="medicines">Medicines</option>
          <option value="hygiene">Hygiene Products</option>
          <option value="others">Others</option>
        </select>

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" required />

        <label htmlFor="message">Address:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button className="btb" type="submit">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
