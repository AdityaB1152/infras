import nc, { createRouter } from 'next-connect';
import connectDb from '../../../../backend/dbConnect';

import products from '../../../../backend/models/products';


export default async function handler(req , res) {
    connectDb();

    if (req.method === 'GET') {
        
           const query = await products.find();
           res.status(200).json({ 
            query:query
           });
      
        
      } else if (req.method === 'POST') {
        
          const query = await products.create(req.body);
          res.status(200).json({ message: 'CHECK' ,
          });
       
      
       
      } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
      }
}

