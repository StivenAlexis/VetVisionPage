import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/es",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Clickjacking: don't allow this site to be framed by anyone.
          { key: "X-Frame-Options", value: "DENY" },
          // Stop browsers from guessing content types away from what's declared.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Don't leak the full referring URL (query params, etc.) to third parties.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // This site uses none of these browser APIs — deny them outright.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Belt-and-suspenders on top of Vercel's own TLS/HSTS handling.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
