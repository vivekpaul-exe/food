import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import { Stepper, 
	 Step,
	StepLabel ,
	StepContent,
	
	IconButton,
	Paper,
	Typography } from "@material-ui/core"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
	const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps()  {
	return ["Step 1" , "Step 2", "step 3" ];
}


function getStepContent(step) {
	switch(step){
	 case 0:
		return `Stuffs 0`;
	 case 1:
		return `Stuffs 1`;
         case 2:
		return `Stuffs 2`;
	default :
		return `inevitable step`;

	}
}


export default function RecipeSteps(){
	const classes = useStyles();
	const [activeStep,setActiveStep] = React.useState(0);
	const steps  = getSteps();


	const handleNext  =() => { 
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	}	
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	}
	const handleReset = () => {
		setActiveStep(0);

	};
	return (
	<div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <IconButton
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    <ArrowBackRoundedIcon />
                  </IconButton>
                  <IconButton
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  > 
		     <ArrowForwardRoundedIcon />
                    {activeStep === steps.length - 1 ? '' : ''}
                  </IconButton>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <IconButton onClick={handleReset} className={classes.button}>
            <ReplayRoundedIcon />
          </IconButton>
	     Replay the steps
        </Paper>
      )}
    </div>	
	)
}
