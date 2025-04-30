import { useState } from 'react';

function BookSession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
    sessionType: 'General Fitness',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong!');
      }
    } catch (err) {
      console.error(err);
      alert('Server error.');
    }
  };

  return (
    <div className="container">
      <h2>Book a Session</h2>
      <p>Fill out the form below and we’ll reach out to confirm your appointment.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
          <select
            name="sessionType"
            value={formData.sessionType}
            onChange={handleChange}
          >
            <option>General Fitness</option>
            <option>Weight Loss</option>
            <option>Strength Training</option>
            <option>Meal Planning</option>
          </select>

          <button type="submit" className="btn-primary">Book Now</button>
        </form>
      ) : (
        <p>✅ Thank you! Your request has been sent. We’ll get back to you soon.</p>
      )}
    </div>
  );
}

export default BookSession;
