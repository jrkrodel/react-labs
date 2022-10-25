import Inventory from "./Inventory/Inventory";
import styles from "./bagLab.module.css";

export default function BagLab() {
  return (
    <div className={styles.container}>
      <Inventory />
    </div>
  );
}
