import LoginScreen from "../components/LoginScreen";
import { globalContext } from "@/context/globalContext";
import { useContext } from "react";
import Head from "next/head";
import DashboardNav from "@/components/DashboardNav";

export default function Home() {
  const { isLogged } = useContext(globalContext);

  return (
    <>
      <Head>
        <title>Eduventure</title>
      </Head>
      {isLogged ? <DashboardNav /> : <LoginScreen />}
    </>
  );
}
