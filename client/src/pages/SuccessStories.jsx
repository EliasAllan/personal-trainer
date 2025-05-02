function SuccessStories() {
    return (
      <div className="page-body" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Client Transformations</h2>
        <p style={{ maxWidth: '600px', marginBottom: '1rem' }}>
          Real people. Real results. Here are some of the amazing transformations our clients have achieved with consistency and the right guidance.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{
            width: '250px',
            border: '1px solid #eee',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}>
            <img src="/before-after-placeholder.jpg" alt="Success Story" style={{ width: '100%', borderRadius: '6px' }} />
            <p style={{ marginTop: '0.5rem' }}>“I never thought I’d feel this strong again.”</p>
          </div>
          {/* Repeat or map more here later */}
        </div>
      </div>
    );
  }
  
  export default SuccessStories;
  