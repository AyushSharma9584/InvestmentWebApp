/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const MenuDesktop = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [adminId, setAdminId] = useState("");
  useEffect(() => {
    let val = localStorage.getItem("token")
    if (val) {
      const decoded = jwtDecode(val);
      setAdminId(decoded.userId)
    } else {
      setAdminId("")
    }
  })

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Blog", url: "/blog" },
    { id: 3, name: "Product", url: "/products" },
    { id: 4, name: "Contact-Us", url: "/contact-us" },
    { id: 5, name: "Knowledge", url: "/knowledge" },
    { id: 6, name: "History", url: "/history" }
    // { id: 6, name: "SignUp", url: "/create-user" },
    // { id: 7, name: "Login", url: "/login-user" },
  ];

  return (
    <div>
      <ul className="hidden md:flex items-center gap-3 font-semibold">
        {data.map((item) =>
          item.name == "History" && adminId != "6730b71d071d46fd90b2e0f3" ? null :
            (
              <li
                key={item.id}
                className="cursor-pointer hover:text-[#18dae4] px-2 py-1 rounded-md"
              >
                <NavLink
                  to={item.url}
                  className={({ isActive }) => (isActive ? "text-[#18dae4]" : "")}
                >
                  {item.name}
                </NavLink>
              </li>
            ))
        }
      </ul>
    </div>
  );
};

export default MenuDesktop;
