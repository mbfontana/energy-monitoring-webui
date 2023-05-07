import { useState, useEffect, ReactNode } from "react";
import consumptionService from "@/pages/api/consumptionService";
import { Appliance, ApplianceConsumption } from "@/pages/api/types";
import styles from "./styles.module.scss";
import { Container, Spinner } from "reactstrap";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const MonitoringCard = ({ id, name }: Appliance) => {
  const [data, setData] = useState<ApplianceConsumption | null>(null);
  const [error, setError] = useState<any>(null);
  const [color, setColor] = useState("red");

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
    const intervalId = setInterval(fetchData, 2000);
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
          style={{ backgroundColor: data.on ? "green" : "red" }}
        />
        <p className={styles.name}>{data.name}</p>
      </div>

      <TitledIcon
        text={String(data.lastTimeOn)}
        icon="/"
        alt="Last Time On Icon"
      />
      
      <p>{String(data.lastTimeOn)}</p>

      <div className={styles.line}>
        <p className={styles.title}>Average Consumption: </p>
        <p className={styles.data}>{data.power}</p>
      </div>

      <p>Total Consumption</p>
      <div className={styles.line}>
        <p className={styles.title}>Daily: </p>
        <p className={styles.data}>{`${data.consumption.daily.total} kW/h`}</p>
        <p className={styles.title}>Monthly: </p>
        <p
          className={styles.data}
        >{`${data.consumption.monthly.total} kW/h`}</p>
      </div>

      <p>Time Connected</p>
      <div className={styles.line}>
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

const TitledIcon = (text: string, icon: string, alt: string) => {
  return (
    <div>
      <img src={icon} alt={alt} />
      <p>{text}</p>
    </div>
  );
};
