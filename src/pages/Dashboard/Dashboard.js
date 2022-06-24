import styles from "./Dashboard.module.css";

const Dashboard = ({ value }) => {
 const {displayName} = value.user
  return (
    <div className={styles.dashboard}>
      <h2>Bem-vindo {displayName}, você está na Dashboard!</h2>
      
    </div>
  );
};

export default Dashboard;
