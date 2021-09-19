import React from 'react';
import Container from '@material-ui/core/Container';
import SearchBar from '../Components/SearchBar';
import DeptFilter from '../Components/DeptFilter';
import DeptBar from '../Components/DeptBar';
import ViewAllButton from '../Components/ViewAllButton';
// import DatePickers from '../Components/DateTimePicker';

export default function Careers() {
  return (
    <React.Fragment>
      <div className="flexbox-container Careers-Page">

        <div className="flexbox-item Page-Header">
          <h2>Careers at Lilavati</h2>
        </div>

        <div className="flexbox-item Page-Desc">
          <p>Below are the various openings we currently have.</p>
        </div>

        <div className="flexbox-item Page-Desc">
          <p>Feel free to browse through them.</p>
        </div>

        <div className="flexbox-item Search-Bar">
          <SearchBar />
        </div>

        <div className="flexbox-item Dept-Filter">
          <DeptBar />
        </div>

        <div className="flexbox-item View-All-Button">
          <ViewAllButton />
        </div>

      </div>

    </React.Fragment>
  );
}