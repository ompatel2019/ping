import React, { useEffect, useState } from "react";

const TransientMessage = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [children]);

  if (!visible) return null;

  return (
    <div className={`text-${color}-500 text-sm mt-1`}>
      <p>{children}</p>
    </div>
  );
};

export default TransientMessage;
