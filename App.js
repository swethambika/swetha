import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    Name: '',
    Email: '',
    PhoneNumber: '',
    PassWord: '',
    Gender: '',
    Branch: '',
    Resume: '',
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const ResetFun = () => {
    setValues({
      Name: '',
      Email: '',
      PhoneNumber: '',
      PassWord: '',
      Gender: '',
      Branch: '',
      Resume: '',
    });
  };

  return (
    <div className='Container'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder='Enter Name'
          name='Name'
          onChange={handleChanges}
          required
          value={values.Name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder='Enter Email'
          name='Email'
          onChange={handleChanges}
          required
          value={values.Email}
        />

        <label htmlFor="phonenumber">Phone Number</label>
        <input
          type="text"
          placeholder='Enter Number'
          name='PhoneNumber'
          onChange={handleChanges}
          required
          value={values.PhoneNumber}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder='Enter Password'
          name='PassWord'
          onChange={handleChanges}
          required
          value={values.PassWord}
        />

        <label className="gender-label">Gender</label>
        <div className="gender-options">
          <input
            type="radio"
            name="Gender"
            value="male"
            onChange={handleChanges}
          /> Male
          <input
            type="radio"
            name="Gender"
            value="female"
            onChange={handleChanges}
          /> Female
        </div>

        <label htmlFor="branch">Branch</label>
        <select
          name='Branch'
          id="branch"
          onChange={handleChanges}
          required
          value={values.Branch}
        >
          <option value="">Select Option</option>
          <option value="cse">CSE</option>
          <option value="ece">ECE</option>
          <option value="eee">EEE</option>
          <option value="ds">DS</option>
          <option value="aiml">AI & ML</option>
          <option value="cs">CS</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          name='Resume'
          onChange={(e) => {
            const file = e.target.files[0];
            setValues({ ...values, Resume: file ? file.name : '' });
          }}
          required
        />
      </form>
      <button type="button" onClick={ResetFun}>RESET</button>
      <button type="submit" onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default App;
