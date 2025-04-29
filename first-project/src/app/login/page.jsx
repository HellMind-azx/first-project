'use client'

import './style.css'
import Nav from '../components/Nav'
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'; 
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "@/firebase/config"
import { useRouter } from 'next/navigation'
import { toast } from "react-toastify"

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    
    const router = useRouter()
    
    function submitForm(e) {
        e.preventDefault()

        for (let key in formData) {
            if (formData[key] === "") {
                toast.error("Please fill in all fields", { theme: "dark" })
                return
            }
        }

        signInWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    const user = userCredential.user
                    // Set session cookie
                    document.cookie = `session=${user.uid}; path=/; max-age=3600; secure; samesite=strict`
                    toast.success("Signed in successfully!", { theme: "dark" })
                    router.push('/')
                })
                .catch((error) => {
                    toast.error(error.message, { theme: "dark" })
                    router.push('/auth/login')
                })
        }

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleGoogleSignIn() {
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            // Set session cookie
            document.cookie = `session=${user.uid}; path=/; max-age=3600; secure; samesite=strict`
            toast.success("Signed in with Google successfully!", { theme: "dark" })
            router.push('/')
        } catch (error) {
            toast.error(error.message, { theme: "dark" })
        }
    }
    return (
        <>
        <Nav/>
        <div className="auth-container auth-signin-container">
            <h1>Sign In</h1>
            <form className='login-form' onSubmit={submitForm}>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        onChange={handleFormChange}
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
                        onChange={handleFormChange}
                    />
                </div>
                <div className="form-field">
                    <button type="submit" id='form-button'>Sign in</button>
                </div>
                <div className="form-field">
                    <button id="google-btn" type="button" className="google-btn" id='form-button' onClick={handleGoogleSignIn}>
                    <FcGoogle />   Sign in with Google
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