import CustomizedTables from '../table/table.component';
import TransitionsModal  from '../modal/modal.component';
import { useState } from 'react';
const Admin = () => {
  const [componentName, setComponentName] = useState('Admin')
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="title">Admin</div>
          </div>
          <div className="col-md-6">
          <TransitionsModal componentName={componentName}/>
          </div>
          {/* <div className="row"> */}
            <div className="">
              <CustomizedTables />
            </div>
          {/* </div> */}
          <div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Admin;
