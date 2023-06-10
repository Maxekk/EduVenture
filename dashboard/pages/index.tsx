import Image from "next/image";
import { Goblin_One, Inter } from "next/font/google";
import LoginScreen from "../components/LoginScreen";
import { globalContext } from "@/context/globalContext";
import { useContext } from "react";
import { redirect } from "next/navigation";
import Dashboard from "../components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLogged } = useContext(globalContext);

  return isLogged ? <Dashboard /> : <LoginScreen />;
}
