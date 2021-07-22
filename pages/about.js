import { makeStyles, Typography } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import styles1 from "../styles/common.module.css";

const useStyles = makeStyles((theme) => ({
  spaceParagraphs: {
    margin: "8px 0",
    textAlign: "justify",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{`FruitsAtoZ | About`}</title>
      </Head>
      <div className={styles1.container}>
        <BreadCrumb>
          <Link href="/">
            <a>{"Home"}</a>
          </Link>
          <Link href="/about">
            <a>{"About"}</a>
          </Link>
        </BreadCrumb>
        <Typography variant={"h6"} className={classes.spaceParagraphs}>
          Amet sint in occaecat aliquip incididunt commodo incididunt. Consequat
          anim sunt veniam quis sit sit laboris Lorem est culpa magna. Sit
          exercitation velit do ut aliqua ullamco nulla pariatur exercitation
          quis officia tempor.Aliquip laboris minim occaecat dolor dolore qui
          adipisicing commodo do. Tempor qui do Lorem elit eu labore voluptate
          ullamco enim ea cupidatat anim anim. Ad ullamco id laborum Lorem Lorem
          voluptate velit magna in dolore dolore enim nisi. Laborum cupidatat
          ipsum elit esse laboris do cillum ipsum nostrud excepteur ea Lorem
          pariatur occaecat. Mollit pariatur dolore nostrud nostrud minim mollit
          irure elit voluptate enim sint ea ea fugiat. Qui voluptate nulla
          dolore cupidatat irure anim irure ex aliquip.
        </Typography>
        <Typography variant={"h6"} className={classes.spaceParagraphs}>
          Deserunt velit et cillum ipsum in fugiat dolor magna magna. Id
          deserunt quis eu aliqua ad exercitation pariatur amet quis irure.
          Deserunt nisi ad reprehenderit voluptate duis laborum magna aute
          aliqua. Et magna aliquip id cupidatat laboris mollit aliqua ipsum
          exercitation ullamco quis. Sit ipsum sunt consequat magna commodo
          occaecat ullamco consequat proident et. Pariatur cillum incididunt
          veniam labore ut nostrud. Fugiat reprehenderit et quis ex et ullamco
          veniam.
        </Typography>
      </div>
    </>
  );
}
