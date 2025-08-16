import { useState,useContext } from "react";
import Addproducts from "../Addpro/Addpro";
import Listproducts from "../List/List";
import "./Adminhome.css";
import {shopcontext} from "../../../context/Shopcontext"

export default function Adminhome() {
  const [activePage, setActivePage] = useState("add");
  const {token}=useContext(shopcontext)

  return (
    <div className="adminhome">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li
              className={activePage === "add" ? "active" : ""}
              onClick={() => setActivePage("add")}
            >
              ➕ Add Products
            </li>
            <li
              className={activePage === "list" ? "active" : ""}
              onClick={() => setActivePage("list")}
            >
              📦 List Products
            </li>
            <li>⚙ Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        {activePage === "add" && <Addproducts token={token} />}
        {activePage === "list" && <Listproducts token={token} />}
      </main>
    </div>
  );
}
