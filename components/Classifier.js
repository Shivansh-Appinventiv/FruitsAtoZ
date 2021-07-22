import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "../styles/classifier.module.css";

const useStyles = makeStyles((theme) => ({
  summary: {
    backgroundColor: "gray",
    color: "white",
  },
  accordian: {
    margin: "16px 0",
  },
}));

export default function Classifier({ children, name }) {
  const classes = useStyles();
  let alpha = `alpha${name}`;
  const [expanded, setExpanded] = React.useState(alpha);

  console.log(children, name, alpha);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        className={classes.accordian}
        expanded={expanded === alpha}
        onChange={handleChange(alpha)}
      >
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${alpha}-fruits-content`}
          id={`${alpha}-fruits-header`}
        >
          <Typography variant={`h4`}>{`Fruits Alpha ${name}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
}
