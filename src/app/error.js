'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App Error:', error);
  }, [error]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Something went wrong!</h1>
      <p style={styles.description}>
        We encountered an unexpected error. Please try again later.
      </p>
      
      {/* Optional: Display error message in development only */}
      {process.env.NODE_ENV === 'development' && (
        <pre style={styles.errorLog}>{error.message}</pre>
      )}

      <div style={styles.buttonGroup}>
        <button onClick={() => reset()} style={styles.retryButton}>
          Try Again
        </button>
        <a href="/" style={styles.homeLink}>
          Go Home
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#dc2626', // Red color for error
    marginBottom: '10px',
  },
  description: {
    color: '#4b5563',
    marginBottom: '20px',
    fontSize: '1.1rem',
  },
  errorLog: {
    backgroundColor: '#f3f4f6',
    padding: '15px',
    borderRadius: '8px',
    color: '#dc2626',
    fontSize: '0.85rem',
    marginBottom: '20px',
    maxWidth: '600px',
    overflowX: 'auto',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
  },
  retryButton: {
    padding: '12px 24px',
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
  },
  homeLink: {
    padding: '12px 24px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    display: 'inline-block',
  },
};