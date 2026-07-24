// // "use client";
// // import { useState, useEffect } from "react";
// // import AdminLogin from "./AdminLogin";
// // import AdminDashboard from "./AdminDashboard";

// // export default function AdminPanel() {
// //   const [token, setToken] = useState<string | null>(null);

// //   useEffect(() => {
// //     const saved = localStorage.getItem("admin_token");
// //     if (saved) setToken(saved);
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("admin_token");
// //     setToken(null);
// //   };

// //   if (!token) return <AdminLogin onLogin={setToken} />;
// //   return <AdminDashboard token={token} onLogout={handleLogout} />;
// // }

// "use client";
// import { useState, useEffect } from "react";
// import AdminLogin, { isValidAdminToken } from "./AdminLogin";
// import AdminDashboard from "./AdminDashboard";

// export default function AdminPanel() {
//   const [token, setToken] = useState<string | null>(null);
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     // Kill any old localStorage token from the previous version — always.
//     if (localStorage.getItem("admin_token")) {
//       localStorage.removeItem("admin_token");
//     }

//     // Only sessionStorage + version/expiry check counts now.
//     const saved = sessionStorage.getItem("admin_token");
//     if (saved && isValidAdminToken(saved)) {
//       setToken(saved);
//     } else {
//       sessionStorage.removeItem("admin_token");
//       setToken(null);
//     }
//     setChecked(true);
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("admin_token");
//     localStorage.removeItem("admin_token"); // extra safety
//     setToken(null);
//   };

//   if (!checked) return null; // avoid flash of dashboard before check completes

//   if (!token) return <AdminLogin onLogin={setToken} />;
//   return <AdminDashboard token={token} onLogout={handleLogout} />;
// }

"use client";
import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import { BASE_URL } from "../../../utils/baseUrl";

export default function AdminPanel() {
  const [token, setToken] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    localStorage.removeItem("admin_token"); // cleanup old version, if any

    const saved = sessionStorage.getItem("admin_token");
    if (!saved) {
      setChecked(true);
      return;
    }

    fetch(`${BASE_URL}/api/admin/verify`, {
      headers: { Authorization: `Bearer ${saved}` },
    })
      .then((res) => {
        if (res.ok) {
          setToken(saved);
        } else {
          sessionStorage.removeItem("admin_token");
        }
      })
      .catch(() => sessionStorage.removeItem("admin_token"))
      .finally(() => setChecked(true));
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    localStorage.removeItem("admin_token");
    setToken(null);
  };

  if (!checked) return null;

  if (!token) return <AdminLogin onLogin={setToken} />;
  return <AdminDashboard token={token} onLogout={handleLogout} />;
}