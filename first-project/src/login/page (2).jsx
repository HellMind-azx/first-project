import './style.css'
import Nav from '../components/Nav'
import Link from 'next/link';

function Login() {
  
    return (
        <>
        <Nav/>
        <div className="auth-container auth-signin-container">
            <h1>Sign In</h1>
            <form className='login-form'>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                    />
                </div>
                <div className="form-field">
                    <button type="submit" id='form-button'>Sign in</button>
                </div>
                <div className="form-field">
                    <button id="google-btn" type="button" className="google-btn" id='form-button'>
                        Sign in with Google
                    </button>
                </div>
            </form>

            <p>
                <small>
                    Don't have an account? <Link href="/auth/register">Register</Link>
                </small>
            </p>
        </div>
        </>
    );
}

export default Login;