import React, { useState } from "react";
import AccountNav from "../components/AccountNav";

function Account() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  const role = localStorage.getItem("role");
  async function logout() {
    await axios.post("http://localhost:5000/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav />
      <div className="flex items-center justify-center">
        <div className="max-w-md rounded overflow-hidden shadow-lg w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">User Profile</div>
            <div className="mb-4">
              <p className="text-gray-700 text-base">
                User: <span class="font-bold">{user.name}</span>
              </p>
              <p className="text-gray-700 text-base">
                Email: <span className="font-bold">{user.email}</span>
              </p>
            </div>
            <button
              onClick={logout}
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
