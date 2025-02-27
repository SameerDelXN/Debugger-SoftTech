export const metadata = {
    title: "Privacy Policy | Debugger SoftTech",
    description: "Read our Privacy Policy to understand how we collect, use, and protect your data at Debugger SoftTech.",
    keywords: ["Privacy Policy", "Data Protection", "Debugger SoftTech", "User Data"],
    openGraph: {
      title: "Privacy Policy | Debugger SoftTech",
      description: "Find out how Debugger SoftTech ensures the security and privacy of your personal information.",
      url: "https://yourwebsite.com/privacy-policy", // Replace with actual URL
      type: "website",
      siteName: "Debugger SoftTech",
      images: [
        {
          url: "https://yourwebsite.com/privacy-banner.jpg", // Add your OG image URL
          width: 1200,
          height: 630,
          alt: "Debugger SoftTech Privacy Policy",
        },
      ],
    },
  };
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  