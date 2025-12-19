import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  compiler:{
    emotion: true
  }
};

export default nextConfig;