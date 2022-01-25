import './sidenav.styles.css';
import { useState } from 'react';
const SideNav = () => {
  const [sideNavItems, setSidenavItems] = useState({
    sidenavItems:[
      'Dashboard',
      'user Permission',
      'Admin',
      'Patients',
      'Donation History',
      'Supports',
      'Logout'
    ]
  })
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-xl-4">
              <div className='sidenav'>
            {sideNavItems.sidenavItems.map((val,ind)=>(
              <div key={ind}>
              <span> {val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav;