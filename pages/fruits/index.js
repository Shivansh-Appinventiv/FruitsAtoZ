import React from "react";
import Head from "next/head";
import Classifier from "../../components/Classifier";
import FruitCard from "../../components/FruitCard";
import styles1 from "../../styles/common.module.css";
import styles2 from "../../styles/fruits.module.css";
import BreadCrumb from "../../components/BreadCrumb";
import Link from "next/link";
import { Typography } from "@material-ui/core";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8000/fruits");
  const data = await res.json();
  return {
    props: { fruits: data },
  };
};

export default function Fruits({ fruits }) {
  console.log(fruits);
  return (
    <>
      <Head>
        <title>{`FruitsAtoZ | Fruits`}</title>
      </Head>
      <div className={styles1.container}>
        <BreadCrumb>
          <Link href="/">
            <a>{"Home"}</a>
          </Link>
          <Link href={"/fruits"}>
            <a>{`Fruits`}</a>
          </Link>
        </BreadCrumb>
        {fruits?.map((fruitLetter, outerIndex) => {
          console.log(fruitLetter);
          return (
            <Classifier
              name={fruitLetter.letterName}
              key={`alpha${outerIndex}`}
            >
              <div className={styles2.cardContainer}>
                {fruitLetter.available &&
                  fruitLetter?.alpha?.map((fruit, innerIndex) => {
                    return (
                      <FruitCard
                        key={`alpha${innerIndex}`}
                        fruitName={fruit.name}
                        fruitPhoto={fruit.photo}
                        fruitDes={fruit.description}
                      />
                    );
                  })}
                {!fruitLetter.available && (
                  <Typography
                    variant={"h3"}
                    style={{ width: "100%" }}
                  >{`No Data Found`}</Typography>
                )}
              </div>
            </Classifier>
          );
        })}
      </div>
    </>
  );
}
