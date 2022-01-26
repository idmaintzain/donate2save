import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
const AdminForm = () => {
  const handleSubmit = ( event ) => {
    event.preventDefault();
    setAdmincreadentials(['',''])
  }
  const handleChange = ( event ) => {
    event.preventDefault();
    const {name, value } = event.target;
    setAdmincreadentials({[name]:value});
  }
  const [adminCredentials, setAdmincreadentials ] = useState([
    'First Name',
    'Last Name',
    'Email',
    'Phone Number',
    'Address',
    'Password',
    'Confirm Password',
  ]); 


  return (
    <div >
      <form onSubmit={handleSubmit}>
        {
          adminCredentials.map((val, key)=> (
            <FormInput key={key} handleOnchange={handleChange} placeHolder={val} name={val}/>
          ))
        }
        <CustomButton>ADD</CustomButton>
      </form>
    </div>
  )
}
export default AdminForm;
