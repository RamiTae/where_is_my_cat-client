import Head from "next/head";
import { useQuery } from "@apollo/client";
import QUERY_COUNTRIES from "./queryCountries.graphql";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Countries</h1>
      <div>
        {data.countries.map(country => (
          <div key={country._id}>{country.name}</div>
        ))}
      </div>
    </div>
  );
}
