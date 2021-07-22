import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import BreadCrumb from "../components/BreadCrumb";
import styles1 from "../styles/common.module.css";
import styles2 from "../styles/home.module.css";
import { Typography } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`FruitsAtoZ | Home`}</title>
      </Head>
      <div className={styles1.container}>
        <BreadCrumb>
          <Link href="/">
            <a>{"Home"}</a>
          </Link>
        </BreadCrumb>
        <div className={styles2.homeTheme}>
          <Image src={"/fruitsTheme.jpg"} height={500} width={1000} />
        </div>
        <div>
          <Typography variant={"h6"}>
            Duis occaecat pariatur aliqua proident occaecat nostrud in velit
            nulla ea eu quis.Sit sit duis ipsum ut nisi. Voluptate eu labore
            consectetur est laborum dolor. Ut mollit id duis minim id nostrud
            esse reprehenderit fugiat.
          </Typography>
        </div>
      </div>
    </>
  );
}
