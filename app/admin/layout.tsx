import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-info p-4 mr-5">Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
