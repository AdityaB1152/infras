import nc from 'next-connect'
import connectDb from '../../../../backend/dbConnect';
import { registerUser } from '../../../../backend/controller/authControllers';
import user from '../../../../backend/models/user';

export default async function handler(req , res) {
    connectDb();

    if (req.method === 'GET') {
        
           const query = await products.find();
           res.status(200).json({ 
            query:query
           });
      
        
      } else if (req.method === 'POST') {
        const {name , email ,password} = req.body
        const query = await user.create({
          name,
          email,
          password
        });

        res.status(200).json({
          'message':'check'
        })
        
       
      
       
      } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
      }
}

