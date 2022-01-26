import CustomButton from "../custom-button/custom-button.component";
import CustomizedTables from '../table/table.component';
const UserPermission = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="title">User Permission</div>
          </div>
          <div className="col-md-6">
          <CustomButton>Add Admin</CustomButton>
          </div>
          {/* <div className="row"> */}
            <div className="">
              <CustomizedTables/>
            </div>
          {/* </div> */}
          
        </div>
      </div>
    </div>
  )
}

export default UserPermission;
