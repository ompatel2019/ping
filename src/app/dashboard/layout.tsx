// src/app/dashboard/layout.tsx
import React from 'react'
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (  
    <div>
      <DashboardNavbar />
      {children}
    </div>
  )
}

export default layout