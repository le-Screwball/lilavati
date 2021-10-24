import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import banner1 from '../Assets/banners.jpg';
import banner2 from '../Assets/banners1.jpg';
import banner3 from '../Assets/banners2.jpg';
import banner4 from '../Assets/banners3.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {

    imgPath:
      banner1,
  },
  {

    imgPath:
      banner2,
  },
  {

    imgPath:
      banner3,
  },
  {

    imgPath:
      banner4,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minwidth: '100vw',
    // flexGrow: 1,
  },

  img: {
    maxHeight: '50vh',
    display: 'block',
    minWidth: '100vw',
    // overflow: 'hidden',

  },

  dotActive: {

  },
}));

export default function BannersCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
      />
    </div>
  );
}