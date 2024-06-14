/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_URI:"mongodb://localhost:27017/",
        API_URL:"",
        NEXTAUTH_SECRET:"coding"
        
    }
};

export default nextConfig;
