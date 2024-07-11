/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains:['image.tmdb.org'],
    remotePatterns:[
    {
        protocol:"https",
        hostname:"**"
    }
]
},
eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
