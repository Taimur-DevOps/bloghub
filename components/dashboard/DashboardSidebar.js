const DashboardSidebar = () => {
    return (
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <a href="/dashboard" className="block text-lg hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/dashboard/create" className="block text-lg hover:text-gray-300">
              Create Blog
            </a>
          </li>
          <li>
            <a href="/dashboard/users" className="block text-lg hover:text-gray-300">
              Manage Users
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default DashboardSidebar;
  