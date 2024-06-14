
import ProductItem from "./ProductItem"


const ProductList = ({  }) => {

  const products = [
    {
      "_id": "666aa89aae5f86db2240e772",
      "id": 1,
      "name": "test",
      "description": "test",
      "price": 200,
      "stock": 2,
      "images": [],
      "__v": 0
    },
    {
      "_id": "666aa8b2ae5f86db2240e774",
      "id": 1,
      "name": "test",
      "description": "test",
      "price": 200,
      "stock": 2,
      "images": [],
      "__v": 0
    }
  ]

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map(product => (
              <ProductItem key={product._id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList
