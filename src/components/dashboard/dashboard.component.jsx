import './dashboard.styles.css';
import { Component, Fragment } from 'react';
import CustomButton from '../custom-button/custom-button.component';
// import PrimarySearchAppBar from '../header/header.component';
import { Outlet } from 'react-router-dom';
import SimpleCard from './dash-card.component';

class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      cardAttr: [
        {title: 'Number of Patient', num: 10, id:4},
        {title: 'Duration Balance', num: 22800000, id:3},
        {title: 'Total received Fund', num: 280, id:2},
        {title: 'Total sent Fund', num: 10, id:1},
      ]
    }
  }
  render () {
    return (
      <Fragment>
        <div className='pt-4'></div>
        <div className="container=fluid pt-4">
          <div className="row">
            <div className="col-md-12">
             {/* <PrimarySearchAppBar/> */}
            </div>
            <div className="col-md-4">
              <div className="title">
                <h2>Dashboard</h2>
              </div>
            </div>
            <div className="col-md-6 pt-3 buttonlist">
              {
                [
                  'Add Admin',
                  'Add Patient',
                  'Transfer Fund',
                  'Generate Report',
                ].map((items, ind)=> (
                  <CustomButton key={ind}>{items}</CustomButton>
                ))
              }
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                  this.state.cardAttr.map((val, index)=> (
                    <SimpleCard key={index} cardTitle={val.title} cardNumber={val.num}/>
                  ))
                }
            </div>
          </div>
        </div>
      
      </Fragment>
    )
  }
}
export default Dashboard;