function BookSession() {
    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Book a Session</h2>
        <p style={{ maxWidth: '600px', marginBottom: '1rem' }}>
          Ready to start your journey? Choose a time that works for you and we’ll take it from there!
        </p>
        
        {/* Placeholder booking form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <input type="text" placeholder="Your Name" required style={{ padding: '0.5rem' }} />
          <input type="email" placeholder="Email Address" required style={{ padding: '0.5rem' }} />
          <input type="datetime-local" required style={{ padding: '0.5rem' }} />
          <button type="submit" className="btn-primary">Book Now</button>
        </form>
      </div>
    );
  }
  
  export default BookSession;
  