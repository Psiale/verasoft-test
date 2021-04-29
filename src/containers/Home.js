// <Header />
// <UserInfo />
// <OrderTabs />
// <Orders />

import React, { useEffect } from "react";
import { defaultHeaders } from "../api/helper";
import Header from "./Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import OrderTabs from "./OrderTabs";
import styles from "./Home.module.scss";

library.add(far);

const Home = () => {
  useEffect(() => {
    defaultHeaders();
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.OrderTabsContainer}>
        <OrderTabs />
      </div>
    </div>
  );
};


export default Home;
