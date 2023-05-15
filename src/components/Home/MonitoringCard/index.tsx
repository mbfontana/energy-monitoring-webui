import { useState, useEffect, ReactNode } from "react";
import consumptionService from "@/pages/api/consumptionService";
import { Appliance, ApplianceConsumption } from "@/pages/api/types";
import styles from "./styles.module.scss";
import { Container, Spinner } from "reactstrap";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const MonitoringCard = ({ id, name }: Appliance) => {
  const [data, setData] = useState<ApplianceConsumption | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await consumptionService.getConsumptionById(id);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, [id]);

  if (!data)
    return (
      <>
        <Container className={styles.spinnerContainer}>
          <LoadingSpinner />
        </Container>
      </>
    );

  return (
    <Container key={data.id} className={styles.container}>
      <div className={styles.line}>
        <span
          className={styles.onBtn}
          style={{ backgroundColor: data.on ? "#7ED957" : "#FF2D2D" }}
        />
        <p className={styles.name}>{data.name}</p>
      </div>

      <div className={styles.titledIcon}>
        <img alt="Clock Icon" src="icons/clock.svg" className={styles.icon} />
        <p>{`${data.lastTimeOn.split("T")[0]}  ${data.lastTimeOn.slice(
          11,
          19
        )} UTC`}</p>
      </div>

      <div className={styles.titledIcon}>
        <img alt="Bolt Icon" src="icons/bolt.svg" className={styles.icon} />
        <p className={styles.title}>Average Power: </p>
        <p className={styles.data}>{`${(data.power / 1000).toFixed(2)} kW`}</p>
      </div>

      <div className={styles.titledIcon}>
        <img alt="Plug Icon" src="icons/plug.svg" className={styles.icon} />
        <p className={styles.title}>Daily Consumption:</p>
        <p className={styles.data}>{`${(
          data.consumption.daily.total / 1000
        ).toFixed(2)} kW/h`}</p>
      </div>

      <div className={styles.titledIcon}>
        <img
          alt="Calendar Icon"
          src="icons/calendar.svg"
          className={styles.icon}
        />
        <p className={styles.title}>Monthly Consumption:</p>
        <p className={styles.data}>{`${(
          data.consumption.monthly.total / 1000
        ).toFixed(2)} kW/h`}</p>
      </div>

      <div className={styles.titledIcon}>
        <img
          alt="Hourglass Icon"
          src="icons/hourglass.svg"
          className={styles.icon}
        />
        <p className={styles.title}>Time Connected</p>
      </div>

      <div className={styles.line} style={{ marginLeft: "24px" }}>
        <p className={styles.title}>Daily: </p>
        <p
          className={styles.data}
        >{`${data.consumption.daily.timeConnected} h`}</p>
        <p className={styles.title}>Monthly: </p>
        <p
          className={styles.data}
        >{`${data.consumption.monthly.timeConnected} h`}</p>
      </div>
    </Container>
  );
};

export default MonitoringCard;
