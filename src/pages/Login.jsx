import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Footer from '../components/Footer'
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Bounce to home page if already logged in
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/'); // Redirect to home on success
    } catch (err) {
      setError('Failed to sign in.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Illustration & Brand */}
          <div className="relative hidden md:flex flex-col items-start space-y-8 p-8">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-tertiary-container/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="absolute top-10 right-20 floating-icon" style={{ animationDelay: '0s' }}>
              <span className="text-5xl opacity-80">⭐</span>
            </div>
            <div className="absolute bottom-20 left-10 floating-icon" style={{ animationDelay: '2s' }}>
              <span className="text-4xl opacity-80">✏️</span>
            </div>
            <div className="absolute top-1/2 right-0 floating-icon" style={{ animationDelay: '4s' }}>
              <span className="text-6xl opacity-80">📖</span>
            </div>
            
            <div className="space-y-4">
              <Link to="/" className="text-primary font-display font-black text-4xl tracking-tight block hover:opacity-80 transition-opacity">
                GenUp Kid
              </Link>
              <h1 className="text-5xl font-display font-extrabold text-on-background leading-tight">Welcome Back!</h1>
              <p className="text-xl text-on-surface-variant max-w-md">Continue your learning adventure and unlock new achievements today.</p>
            </div>
            
            <div className="relative w-full aspect-[4/3] max-w-lg rounded-[2rem] overflow-hidden bg-surface-container shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                alt="A cheerful young boy using a tablet for learning"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7EbtxhbWor-AQf9A-V2y0-CUQfpu9bKYJVbVa6nL_zYFPesMWtRu4CnpU69XIR5f_MMFOlP8MiUr7E5zPVcKSu1zIzU4rHiZtv-u7aX72drQ10ruz0634bddRCvvkgzxfKzDbxc55AijfxTY3gxUtrb38ClaC8RJAAEO7tIm6fDssWcWZPlzsQlg9v-HyaaGLv73t5bgLbYzh9T0U7steNimgCzMfk-2gdaxNgdHqS0r3x7T5Eo4LUnWtpfNsG9e7oziNWZGKU54"
              />
            </div>
          </div>
          
          {/* RIGHT SIDE: Login Card */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-xl w-full max-w-md">
              <div className="mb-8">
                <Link to="/" className="text-primary font-display font-black text-3xl tracking-tight block md:hidden mb-6 text-center hover:opacity-80 transition-opacity">
                  GenUp Kid
                </Link>
                <h2 className="text-3xl font-display font-extrabold text-on-background mb-2">
                  Sign In
                </h2>
                <p className="text-on-surface-variant font-medium">
                  Access your learning dashboard
                </p>
              </div>
              
              {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-6 text-sm font-bold">
                  {error}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-on-surface ml-1" htmlFor="email">Email</label>
                  <div className="relative">
                    <input 
                      className="w-full px-4 py-4 bg-surface-container-highest border-0 rounded-md focus:ring-4 focus:ring-primary-fixed/40 transition-all font-medium text-on-surface placeholder:text-outline-variant outline-none" 
                      id="email" 
                      placeholder="Enter your email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-on-surface ml-1" htmlFor="password">Password</label>
                  <div className="relative">
                    <input 
                      className="w-full px-4 py-4 bg-surface-container-highest border-0 rounded-md focus:ring-4 focus:ring-primary-fixed/40 transition-all font-medium text-on-surface placeholder:text-outline-variant outline-none" 
                      id="password" 
                      placeholder="Enter your password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <button 
                  disabled={loading}
                  className="w-full bg-primary-fixed text-on-primary-container py-4 md:py-4 mt-6 rounded-full font-display font-extrabold text-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 outline-none disabled:opacity-70" 
                  type="submit"
                >
                  {loading ? 'Processing...' : 'Sign In →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
