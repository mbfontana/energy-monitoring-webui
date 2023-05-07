import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.navBackground}>
      <Container className={styles.container}>
        <p>LOGO</p>
        <div>
          <p>ICON1</p>
          <p>ICON2</p>
          <p>ICON3</p>
        </div>
      </Container>
    </div>
  );
};

export default Header;
