import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "9vh",
    display: "flex",
    flexDirection: "column",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  image: {
    width: 128,
    height: 128,
  },
}));

function getSteps() {
  return ["Order is placed", "Out for delivery", "Delivered"];
}

function getStepContent(stepIndex:number) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
} 

export default function StepperPart() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  }; 

  return (
    <div className={classes.root}>
      <Stepper
       
        activeStep={activeStep}
        alternativeLabel
        style={{ height: "5vh" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel style={{ fontSize: "x-small" }}>{label}</StepLabel>
          </Step>
        ))}
     
      </Stepper>

    </div>
  );
}
