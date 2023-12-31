
import style from "../styles/Header.module.css";
import Image from "next/image";
import Icon from "../public/assets/notificationIcon.svg";

export default function PageHeader({ pageTitle, activeTab }) {
  return (
    <>
        <header className={style.breadcrumb_Layout}>
        <div className={style.breadcrumb_Section}>
          {" "}
          <div className={style.page_Title}>{pageTitle}</div>
          <div>
            <ul className={style.breadcrumb_list}>
              <li className={style.breadcrumb_name}>Employees</li>
              <li
                className={`${style.breadcrumb_name}${style.breadcrumb_name_active}`}
              >
                {activeTab}
              </li>
            </ul>
          </div>
        </div>
        <div className={style.breadcrumb_filter_section}>
          <div>
           
          </div>
          <div>
           
          </div>
          <div>
            {" "}
            <Image
              src={Icon}
              alt="notification Icon"
              className={style.notificationIcon}
            />{" "}
          </div>
        </div>
      </header>
    </>
  );
}
