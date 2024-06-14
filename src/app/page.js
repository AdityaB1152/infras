"use client"

import Hero from "@/app/Components/Hero";
import Layout from "@/app/Components/Layout";
import MiniCart from "@/app/Components/MiniCart";
import Nav from "@/app/Components/Nav";
import ProductCard from "@/app/Components/ProductCard";
import ProductList from "@/app/Components/ProductList";

import { AuthProvider } from "@/app/context/AuthContext";
import { CartProvider } from "@/app/context/shopContext";

import RegisterPage from "./register/Register";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Home() {

  const router = useRouter();
  return (
    <div>
      
      <AuthProvider>
      <Hero/>
      <RegisterPage/>
      
      
       
      </AuthProvider>
    
   
    </div>
  );
}
