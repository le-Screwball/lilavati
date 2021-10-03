import React from 'react';
import OptionCard from '../Components/OptionCard';
import BannersCarousel from '../Components/Banners';
import UpdatesButtonOne from '../Components/UpdatesButton1';
import SocInitCardOne from '../Components/SocInitCardOne';
import SocInitCardTwo from '../Components/SocInitCardTwo';
import SocInitCardThree from '../Components/SocInitCardThree';
import SocInitCardFour from '../Components/SocInitCardFour';
import UpdatesButtonTwo from '../Components/UpdatesButton2';
import UpdatesButtonThree from '../Components/UpdatesButton3';
import UpdatesButtonFour from '../Components/UpdatesButton4';
import UpdatesButtonFive from '../Components/UpdatesButton5';
import UpdatesButtonSix from '../Components/UpdatesButton6';
import TestimonialCardOne from '../Components/TestimonialCardOne';
import TestimonialCardTwo from '../Components/TestimonialCardTwo';
import TestimonialCardThree from '../Components/TestimonialCardThree';
import TestimonialCardFour from '../Components/TestimonialCardFour';
import Grid from '@material-ui/core/Grid';


export default function Home() {
  return (
    <React.Fragment>

      <div className="flexbox-container">

        <Grid container spacing={3} justifyContent="center" >


          <Grid item xs={10}>

            <div className="flexbox-item Page-Header">

              <h2>Priority Links</h2>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Option-Card">

              <OptionCard />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item">

              <BannersCarousel />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Page-Header">

              <h2>Updates</h2>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Updates-Button">

              <UpdatesButtonOne />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Updates-Button">

              <UpdatesButtonTwo />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Updates-Button">

              <UpdatesButtonThree />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Updates-Button">

              <UpdatesButtonFour />

            </div>
          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Updates-Button">

              <UpdatesButtonFive />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Updates-Button">

              <UpdatesButtonSix />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Page-Header">

              <h2>Testimonials</h2>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Testimonial-Card">

              <TestimonialCardOne />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Testimonial-Card">

              <TestimonialCardTwo />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Testimonial-Card">

              <TestimonialCardThree />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Testimonial-Card">

              <TestimonialCardFour />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Page-Header">

              <h2>Social Initiatives</h2>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item SocInit-Card">

              <SocInitCardOne />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item SocInit-Card">

              <SocInitCardTwo />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item SocInit-Card">

              <SocInitCardThree />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item SocInit-Card">

              <SocInitCardFour />

            </div>

          </Grid>

        </Grid>


      </div>




    </React.Fragment>
  );
}