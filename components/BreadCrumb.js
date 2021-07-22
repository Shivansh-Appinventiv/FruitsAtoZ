import React from "react";
import { Breadcrumbs, makeStyles } from "@material-ui/core";
//import styles from "../styles/breadcrumb.module.css";

const useStyle = makeStyles((theme) => ({
  container: {
    background: "whitesmoke",
    color: "rgba(0,0,0,0.5)",
    minHeight: "40px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 8px",
  },
}));

export default function BreadCrumb({ children }) {
  const classes = useStyle();
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.container}>
      {children}
    </Breadcrumbs>
  );
}
