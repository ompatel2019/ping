// src/app/(marketing)/layout.tsx
import Navbar from '@/components/marketing/Navbar'
import Footer from '@/components/marketing/Footer'
import React from 'react'
import Widget from '@/components/marketing/Widget'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Widget />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;