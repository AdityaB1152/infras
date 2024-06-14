import { NextResponse } from 'next/server';
import Products from '../models/products';

export const newProduct = async (req , res) => {
    const product = await Products.create(req.body);
    NextResponse.json({
        "Status":'Done'
    });
};

export const getProducts = async (req , res ) => {
    const products = await Products.find();
    NextResponse.json({
        products,
    });
};
