import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

const DashboardSidebar = () => {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.token;

  const handleLogout = () => {
    // Clear token and redirect to login page
    document.cookie = "token=; path=/; max-age=0"; // Deletes the token cookie
    router.push("/dashboard/login");
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <div className="flex items-center mb-8">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <div className="space-y-4">
        {/* Dashboard Links */}
        <Link href="/dashboard">
          <a
            className={`block px-4 py-2 rounded-md hover:bg-gray-700 ${
              router.pathname === "/dashboard" ? "bg-gray-700" : ""
            }`}
          >
            Blog Posts
          </a>
        </Link>
        <Link href="/dashboard/create">
          <a
            className={`block px-4 py-2 rounded-md hover:bg-gray-700 ${
              router.pathname === "/dashboard/create" ? "bg-gray-700" : ""
            }`}
          >
            Create Blog
          </a>
        </Link>
        <Link href="/dashboard/users">
          <a
            className={`block px-4 py-2 rounded-md hover:bg-gray-700 ${
              router.pathname === "/dashboard/users" ? "bg-gray-700" : ""
            }`}
          >
            Manage Users
          </a>
        </Link>
      </div>
      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="block w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
