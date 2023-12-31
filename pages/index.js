import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import GlobalStyle from "../styles/Global.module.css";
import PageHeader from "../components/pageHeader"; // Import your Sidebar component here
import Table from "../components/table"; // Import your Sidebar component here
import Filter from "../components/filter"; // Import your Sidebar component here
import Stats from "../components/stats"; 



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Auto Desk | Dashboard</title>
        <meta name="description" content="Auto Desk App created for Auto Components" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-2">
      <PageHeader pageTitle="Dashboard" activeTab="Module Access" />
      <Filter/>
      <Stats/>
      <Table/>
      </div>
      
    </>
  );
}
