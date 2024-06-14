import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
;
import connectDb from "../../../../backend/dbConnect";
import bcrypt from 'bcryptjs'
import User from "../../../../backend/models/user";

export default async function auth(req , res) {

    return await NextAuth(req, res, {
        session: {

        strategy: 'jwt'

        },

        providers: [

        Credentials({

        async authorize (credentials, req) {

        connectDb();

        const { email, password } = credentials

        const user = await User.findOne({ email }).select("+password")
        if(!user){
            throw new Error('Invalid Email or Password');

        }

        const isPasswordMatched = await bcrypt.compare(
            password,
            user.password,
        )

        if(!isPasswordMatched){
            throw new Error('Invalid Email or Password');

        }

        return user;

        },
        }),
        ],
        pages:{
            signIn:'/login',
        },
        secret : process.env.NEXTAUTH_SECRET,
});
}