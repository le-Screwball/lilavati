import React from 'react';
import Container from '@material-ui/core/Container';
import OptionCard from '../Components/OptionCard';
import BannersCarousel from '../Components/Banners';
import OptionCardList from '../Components/OptionCardList';
import UpdatesButton from '../Components/UpdatesButton';
import TestimonialCard from '../Components/TestimonialCard';
import SocInitCard from '../Components/SocInitCard';
// import DatePickers from '../Components/DateTimePicker';

export default function Home() {
  return (
    <React.Fragment>

      <div className="flexbox-container">

        <div className="flexbox-item Page-Header">

          <h2>Priority Links</h2>

        </div>

        <div className="flexbox-item Option-Card">

          <OptionCard />

        </div>

        <div className="flexbox-item">

          <BannersCarousel />

        </div>

        <div className="flexbox-item Page-Header">

          <h2>Updates</h2>

        </div>

        <div className="flexbox-item Updates-Button">

          <UpdatesButton />

        </div>

        <div className="flexbox-item Updates-Button">

          <UpdatesButton />

        </div>

        <div className="flexbox-item Updates-Button">

          <UpdatesButton />

        </div>

        <div className="flexbox-item Updates-Button">

          <UpdatesButton />

        </div>

        <div className="flexbox-item Updates-Button">

          <UpdatesButton />

        </div>

        <div className="flexbox-item Updates-Button">

          <UpdatesButton />

        </div>

        <div className="flexbox-item Page-Header">

          <h2>Testimonials</h2>

        </div>

        <div className="flexbox-item Testimonial-Card">

          <TestimonialCard />

        </div>

        <div className="flexbox-item Testimonial-Card">

          <TestimonialCard />

        </div>

        <div className="flexbox-item Testimonial-Card">

          <TestimonialCard />

        </div>

        <div className="flexbox-item Page-Header">

          <h2>Social Initiatives</h2>

        </div>

        <div className="flexbox-item SocInit-Card">

          <SocInitCard />

        </div>

        <div className="flexbox-item SocInit-Card">

          <SocInitCard />

        </div>

        <div className="flexbox-item SocInit-Card">

          <SocInitCard />

        </div>

        <div className="flexbox-item SocInit-Card">

          <SocInitCard />

        </div>



      </div>




    </React.Fragment>
  );
}