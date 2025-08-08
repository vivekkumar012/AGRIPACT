import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav.jsx";
import BookingsPage from "./BookingsPage.jsx";
import BookingPage from "./BookingPage.jsx";
import DashBoard from "../components/DashBoard.jsx";
import ProfileCard from "../components/ProfileCard.jsx";

export default function AccountPage() {
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
      {/* <div></div> */}
      <div className="flex items-center justify-center">
        <div className="max-w-md rounded overflow-hidden shadow-lg w-full">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">User Profile</div>
            <div className="mb-4">
              <p className="text-gray-700 text-base">
                User: <span className="font-bold">{user.name}</span>
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

      {subpage === "profile" && (
        <div>
          {/* Logged in as {user.name} ({user.email})<br /> */}

          {role === "vendor" && <DashBoard />}
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
      {subpage === "account/bookings" && <BookingsPage />}
      <BookingPage />
    </div>
  );
}
