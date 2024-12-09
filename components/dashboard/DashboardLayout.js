"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";



//  Layout component that wraps dashboard pages
const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth");
    } else {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUser(decodedToken);
    }
  }, [router]);

  return (
    
    <div className="flex">
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <ul className="mt-6 space-y-4">
          <li>
            <Link href="/dashboard/blogs">
              <a className="block">Blogs</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/users">
              <a className="block">Users</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
