/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["res.cloudinary.com",'cdn.pixabay.com','images.unsplash.com'],
      },
};

export default nextConfig;
