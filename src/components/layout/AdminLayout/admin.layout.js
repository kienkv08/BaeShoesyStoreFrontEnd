import React, { useState } from 'react';
import AdminHeader from '../../common/adminheader/Header';
import Sidebar from '../../common/adminsidebar/Sidebar';

function AdminLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="admin-layout">
      <AdminHeader OpenSidebar={handleOpenSidebar} />
      <div className="admin-layout-content">
        <Sidebar
          openSidebarToggle={openSidebar}
          OpenSidebar={handleOpenSidebar}
        />
        <div className="admin-layout-body">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;