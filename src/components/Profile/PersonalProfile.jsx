import Image from "next/image";
import styles from "./style.module.css";
import { useSession } from "next-auth/react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(res.statusText, { message: "Failed to fetch categories" });
  }
  return res.json();
};
const PersonalPage = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Personal Page</h1>
      <p className={styles.desc}>Here you can find the your personal info</p>
      {/* <div className={styles.user}>
        {data.map((item) => (
          <div className={styles.user} key={item.id}>
            <img src={item.image} className={styles.image} alt="Profile" />
            <span className={styles.name}>Name : {item.name}</span>
            <span className={styles.name}>Email : {item.email}</span>
            <span className={styles.name}>Id: {item.id}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default PersonalPage;
