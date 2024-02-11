import React ,{useState} from 'react';
import './App.css';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstHandler(event){
  //   // console.log("First Name: ")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }
  // function changeLastHandler(event){
  //   // console.log("Last Name:")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState( {firstName:"",lastName:"", email:""} )
  console.log(formData)
  function changeHandler(event){
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [event.target.name] : [event.target.value]
        }
      })
  }
  return (
      <div className="App">
        <form action="">
          <input type="text" placeholder='First Name' onChange={changeHandler} name="firstName" />
          <br></br>
          <br></br>
          <input type="text" placeholder='Last Name' onChange={changeHandler} name='lastName' />
          <br/>
          <br/>
          <input type="email" placeholder='Enter Your Email Here' onChange={changeHandler} name='email' />
        </form>
      </div>
  );
}

export default App;
