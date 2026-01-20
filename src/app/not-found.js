import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.description}>
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link href="/" style={styles.button}>
        Return Home
      </Link>
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
    backgroundColor: '#f9fafb',
    color: '#1f2937',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  errorCode: {
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: 0,
    color: '#6366f1', // Indigo accent
  },
  title: {
    fontSize: '2rem',
    margin: '10px 0',
  },
  description: {
    color: '#6b7280',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#1f2937',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '500',
    transition: 'background 0.2s',
  },
};