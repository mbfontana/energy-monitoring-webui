import consumptionService from "@/pages/api/consumptionService";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import useSWR from "swr";
import MonitoringCard from "../MonitoringCard";
import { Container } from "reactstrap";

const FirstSection = () => {
  const { data } = useSWR("/appliances", consumptionService.getAppliances);

  const appliances = data?.data;

  return (
    <Container className={styles.container}>
      {appliances?.map((e) => (
        <div key={e.id}>
          <MonitoringCard id={e.id} name={e.name} />
        </div>
      ))}
    </Container>
  );
};

export default FirstSection;
