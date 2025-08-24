'use client';
import React, { useState } from 'react';
import './book.css';

export default function BookService({ params }) {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  
  const handleSubmit = async () => {
    const { service } = await params;
    setLoading(true);
    try {
      const res = await fetch('/api/service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: decodeURIComponent(service),
          description,
        }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error submitting request:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-process">
      <h2>Describe Your Issue:</h2>
      <textarea
        placeholder="Describe your issue in 50 words..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Searching...' : 'Search for nearest available cleaner'}
      </button>

      {response && (
        <div className="results">
          <h3>Estimated Price: ₹{response.price}</h3>
          <h4>Available Providers:</h4>
          {response.providers?.length ? (
            <ul>
              {response.providers.map((provider, index) => (
                <li key={index}>{provider.name}</li>
              ))}
            </ul>
          ) : (
            <p>No providers found nearby.</p>
          )}
        </div>
      )}
    </div>
  );
}
