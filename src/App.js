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

  const [formData, setFormData] = useState( {firstName:"",lastName:"", email:"",comment:"", isVisible:true, mode:"", favcar:"" } )
  // console.log(formData)
  function changeHandler(event){
    const{name, value, checked, type} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name] : type=== "checkbox" ? checked : value
        }
      })
  }
  function submitHandler(event){
      event.preventDefault()
      //print
      console.log("Finnaly Printing the entireform data .... ")
      console.log(formData)
  }
  return (
      <div className="App">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='First Name' onChange={changeHandler} name="firstName" value={formData.firstName} />
          <br></br>
          <br></br>
          <input type="text" placeholder='Last Name' onChange={changeHandler} name='lastName' value={formData.lastName} />
          <br/>
          <br/>
          <input type="email" placeholder='Enter Your Email Here' onChange={changeHandler} name='email' value={formData.email} />
          <br/> <br/>
          <textarea
            placeholder='Enter Your comments Here'
            onChange={changeHandler}
            name='comments'
            value={formData.comment}
          />
          <br/> <br/>
          <input
            type='checkbox'
            onChange={changeHandler}
            name='isVisible'
            id='isVisible'
            checked={formData.isVisible}
          />
          <label htmlFor='isVisible'>Am I visible ?</label>
          <br /> <br />
          <fieldset>
              <legend>Mode:</legend>
              <input type='radio' onChange={changeHandler} name='mode' value="online-Mode" id='online-Mode' checked={formData.mode === "online-Mode"} />
              <label htmlFor='online-Mode'>Online Mode</label>

              <input type='radio' onChange={changeHandler} name='mode' value="offline-Mode" id='offline-Mode' checked={formData.mode === "offLine-Mode"}/>
              <label htmlFor='offline-Mode'>Offline Mode</label>
          </fieldset>
          <label htmlFor='favcar'>Tell me Your Favourate cat </label>
          <select
           onChange={changeHandler}
          name="favcar"
          id='favcar'
          value={formData.favcar}>
            <option value="scorpio">Scorpio</option>
            <option value="fortuner">fortuner</option>
            <option value="Thar">Thar</option>
            <option value="Legender">Legender</option>
            <option value="Defender">Defender</option>
            
          </select>
          <br /> <br />
          <input type='submit' value="Submit"/>

          
          

          

          {/* name same ho toh ek hi check hoga */}
        </form>
      </div>
  );
}

export default App;
