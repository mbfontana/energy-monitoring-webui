import Link from "next/link";
import styles from "./styles.module.scss";

const SideLinks = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link
            href="https://github.com/stars/mbfontana/lists/energy-monitoring"
            target="_blank"
          >
            <img
              src="icons/github.svg"
              className={styles.iconLink}
              alt="github"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/matheusfontana/"
            target="_blank"
          >
            <img
              src="icons/linkedin.svg"
              className={styles.iconLink}
              alt="linkedin"
            />
          </Link>
        </li>
        <li>
          <Link href="mailto: mbfontana@outlook.com">
            <img src="icons/mail.svg" className={styles.iconLink} alt="mail" />
          </Link>
        </li>
        <li>
          <div className={styles.sideLine} />
        </li>
      </ul>
    </div>
  );
};

export default SideLinks;
