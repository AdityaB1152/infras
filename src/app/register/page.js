import React from 'react'
import { AuthProvider } from '../context/AuthContext'
import RegisterPage from './Register'

export default function Register () {
  return (
    <div>
        <AuthProvider>
            <RegisterPage/>
        </AuthProvider>
    </div>
  )
}
