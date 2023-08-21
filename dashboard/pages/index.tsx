import LoginScreen from "../components/LoginScreen";
import { globalContext } from "@/context/globalContext";
import { useContext } from "react";
import Dashboard from "../components/Dashboard";
import Head from "next/head";

export default function Home() {
  const { isLogged } = useContext(globalContext);

  return (
    <>
      <Head>
        <title>Eduventure</title>
      </Head>
      {isLogged ? <Dashboard /> : <LoginScreen />}
    </>
  );
}
