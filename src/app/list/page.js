import React from 'react'
import ProductList from '../Components/ProductList'

const Home =  async () => {

  const getList  = async () => {
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
  
    const result = await response.json();
    console.log(result);
  }

 
 await getList();
  
  return (
    <div> 
      <div>
        <button  className="w-40 px-4 py-2 font-medium text-white border border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800"
                    >Sign Out</button>
      </div>
      <ProductList/></div>
  )
}

export default Home