import Image from "next/image";
import { Inter } from "next/font/google";
import LoginScreen from "@/components/LoginScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <LoginScreen />;
}
