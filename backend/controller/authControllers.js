import User from '../models/user'

export const registerUser = async (name , email , password) => {
    
    console.log("INSIDE")
    const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:name,
          email:email,
          password:password, // Replace with your data
        }),
      });
    
      const result = await response.json();
      console.log(result);
    };
