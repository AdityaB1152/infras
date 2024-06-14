##Features
Features
Frontend
User Interface: A clean and responsive user interface built with Next.js 14 for seamless navigation and user experience.
![home](https://github.com/AdityaB1152/infras/assets/83021173/05528ab2-ed43-4807-98e8-e66974bfeb25)

Authentication Pages: Separate pages for user registration and login, integrated with JWT authentication.
![login](https://github.com/AdityaB1152/infras/assets/83021173/3da278da-3a24-4717-9464-ff7f2e8fdc82)
![register](https://github.com/AdityaB1152/infras/assets/83021173/5569bb0d-8aba-4d21-b451-33a67eaad2c4)
![mongo_user](https://github.com/AdityaB1152/infras/assets/83021173/3bf0637d-2d67-4bcb-bbba-203f6342527f)


Product Display: A product listing page displaying items fetched from the backend.(UI is very vauge,but perfectly working with backend apis)
![products](https://github.com/AdityaB1152/infras/assets/83021173/d4ab3764-64e6-4085-bac0-c1c504f366b1)

Backend
API Routes: RESTful API routes built with Next.js for handling user registration, login, and product management.
JWT Authentication: Secure user authentication using JSON Web Tokens (JWT) to protect routes and user data.  
You can find it here --> https://github.com/AdityaB1152/infras/blob/main/src/pages/api/auth/%5B...nextauth%5D.js
Database Integration: Connection to MongoDB using Mongoose for handling user and product data.
![mongo_products](https://github.com/AdityaB1152/infras/assets/83021173/e6f59cef-46bd-4780-bf1f-836dd249204e)
![api](https://github.com/AdityaB1152/infras/assets/83021173/9ebc5c5d-b915-44b0-8a0f-2d03c40869ae)


##Problem Statement
Create a sample e-commerce application using Next.js 14 that includes a basic frontend and backend setup, JWT authentication for secure user access, state management using React Context, and MongoDB for data storage.
Features
Frontend
User Interface: A clean and responsive user interface built with Next.js 14 for seamless navigation and user experience.
Authentication Pages: Separate pages for user registration and login, integrated with JWT authentication.
Product Display: A product listing page displaying items fetched from the backend.
Backend
API Routes: RESTful API routes built with Next.js for handling user registration, login, and product management.
JWT Authentication: Secure user authentication using JSON Web Tokens (JWT) to protect routes and user data.
Database Integration: Connection to MongoDB using Mongoose for handling user and product data.
State Management
React Context: State management implemented using React Context to manage authentication states across the application.
Toast Notifications: Integration of React Toastify for user-friendly notifications on actions like login, logout, and errors.






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
