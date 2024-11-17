/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { NavLink } from "react-router-dom";

const MenuMobile = ({ setMobileMenu }) => {

  const [adminId, setAdminId] = useState("");
  useEffect(() => {
    let val = localStorage.getItem("token")
    if (val) {
      const decoded = jwtDecode(val);
      setAdminId(decoded.userId)
    }
    else {
      setAdminId("")
    }
  },)

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Blog", url: "/blog" },
    { id: 3, name: "Product", url: "/products" },
    { id: 4, name: "Contact-Us", url: "/contact-us" },
    { id: 5, name: "Knowledge", url: "/knowledge" },
    { id: 6, name: "History", url: "/history" }

  ];

  return (
    <div>
      <ul className="flex flex-col md:hidden font-bold absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#141314] border-t-[1px]">
        {data.map((item) =>
          item.name == "History" && adminId != "6730b71d071d46fd90b2e0f3" ? null :
            (
              <NavLink
                key={item.id}
                to={item.url}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `hover:bg-white/[0.09] rounded-md cursor-pointer py-4 px-5 ${isActive ? "text-[#0aa5cc]" : ""
                  }`
                }
              >
                <li>{item.name}</li>
              </NavLink>
            ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
