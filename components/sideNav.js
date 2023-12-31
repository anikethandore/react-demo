import styles from "../styles/Sidebar.module.css";
import HomeIcon from "../public/assets/Home.svg";
import ActiveIcon from "../public/assets/HelpDeskActiveMenu.svg";

import Icon from "../public/assets/logo.svg";
import LogoutIcon from "../public/assets/logoutIcon.svg";
import SettingIcon from "../public/assets/settingIcon.svg";
import ProfileIcon from "../public/assets/sample_Profile_pic.svg";
import HelpIcon from "../public/assets/helpIcon.svg";


import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Sidebar({
  activePage,
  subPageActive,
  isCollapsed,
  toggleCollapse,
}) {
  const router = useRouter();
 
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleExpand = (index) => {
    if (activeMenuItem === index) {
      setActiveMenuItem(null);
    } else {
      setActiveMenuItem(index);
    }
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  const [searchInput, setSearchInput] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  // Your SidebarList and other state variables go here

  // Event handler for updating the search input value
  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    // Filter menu items based on the search input value
    const filteredItems = SidebarList[0].menuItems.filter((menuItem) => {
      // Check if the main menu item matches the search term
      const mainMenuItemMatches = menuItem.name
        .toLowerCase()
        .includes(inputValue.toLowerCase());

      // Check if menuItem has subItems and if any subItem matches the search term
      const subItemMatches = menuItem.subItems
        ? menuItem.subItems.some((subItem) => {
            if (typeof subItem === "string") {
              return subItem.toLowerCase().includes(inputValue.toLowerCase());
            } else if (typeof subItem === "object") {
              return Object.values(subItem).some(
                (value) =>
                  typeof value === "string" &&
                  value.toLowerCase().includes(inputValue.toLowerCase())
              );
            }
            return false;
          })
        : false;

      // Combine the conditions to determine if the menu item should be displayed
      const shouldDisplay = mainMenuItemMatches || subItemMatches;
      return shouldDisplay;
    });

    setFilteredMenuItems(filteredItems);
  };

  // Function to highlight the search term in a string
  const highlightSearchTerm = (text, searchTerm) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  //Trucate email and userName
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div>
      <aside className={styles.sidebar}>
        <div className={styles.sidebar__icon}>
          <div className={styles.firstSection}>
            <div className={styles.logo}>
              <Link href="#">
                {" "}
                <Image src={Icon} alt="Logo" />{" "}
              </Link>
            </div>
            <nav>
              <ul className="">
                <li className={styles.navItem} >
                  <Link href="#">
                    <Image src={HomeIcon}  alt="" />
                  </Link>
                </li>
               <li className={styles.navItem} onClick={toggleCollapse}>
                  <Link href="#">
                    <Image src={ActiveIcon}  alt="" />
                  </Link>
                </li>
                
               
              </ul>
            </nav>
          </div>

          <div className={styles.sidebar__Profile}>
            <nav>
              <ul>
                <li className={styles.navItem_}>
                  <Image src={SettingIcon}  alt="Setting Icon" />
                </li>
                <li className={styles.navItem_}>
                  <Image src={HelpIcon} alt="Help Icon" />
                </li>
                <li className={styles.navItem_}>
                  <Image src={ProfileIcon} alt="profile Pic" />
                </li>{" "}
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={`${styles.sidebar__menu} ${
            isCollapsed ? styles.collapsed : ""
          }`}
        >
          <div className={styles.first__section}>
            <h1 className={styles.title}>
              Punctualiti{" "}
              <span>
                <button
                  onClick={toggleCollapse}
                  className={styles.collapseButton}
                >
                  {" "}
                  {isCollapsed ? "»" : "«"}
                </button>
              </span>
            </h1>

            <div>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInputBox}
                // value={searchInput}
                // onChange={handleSearchInputChange}
              />
            </div>
            <div className={styles.moduleLabel}>Dashboard</div>
            <div className={styles.moduleItems}>
            <ul>
              <li className={`${styles.menuItem } ${styles.menuItemActive}`}>
              <Link href="#">
                Home
              </Link>
              </li>
              <li className={styles.menuItem}>
              <Link href="#">
                Home
              </Link>
              </li>
            </ul>
            </div>
          </div>

          <div className={styles.last__section}>
            <div className={styles.last__section_info}>
              <div className={styles.last__section_column}>
                <div className={styles.last__section_name} >
                  {truncateText("userName", 16)}
                </div>
                <div className={styles.last__section_email} >
                  {truncateText("userEmail", 16)}
                </div>
              </div>
              <div className={styles.last__section_column}>
                <div className={styles.logoutbtn}>
                  <Image
                    src={LogoutIcon}
                    alt="logout button"
                    onClick={() => logout()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>

   
  );
}