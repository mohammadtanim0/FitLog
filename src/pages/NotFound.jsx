import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
  return <main className="not-found section container"><span className="error-number">404</span><h1>PAGE NOT FOUND</h1><p>The page you're looking for doesn't exist or has been moved.</p><Link to="/" className="primary-btn"><HomeIcon size={17} /> Go to Home</Link></main>;
}
