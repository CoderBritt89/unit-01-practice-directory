import React, {useState} from 'react'
import axios from 'axios'
import './MyFeedback.scss';
import {connect} from 'react-redux'
import {postFB} from '../../redux/fbReducer'
import {updateUser} from '../../redux/authReducer'

const MyFeedback = (props)=>{

    

const [fbInfo, setfbInfo] = useState({
    selectCategory: '',
    fb: [],
})

const [anonymous, setAnonymous]  = useState(false)

// const [displayfb, setDisplayFb] = useState([]) 
//trying with just redux fbreducer

console.log(checkbox)


const submitFB =()=>{
 axios.post('/myfeedback/submit', fbInfo) //sending fbInfo to fbcontroller.js createFB function
 .then((res)=> {
     props.postFB(res.data)
     setfbInfo({fbInfo: {selectCategory: '', fb: []}})
  

}).catch((err)=> console.log(err))   

}

const handleanonymous = () =>{
    setAnonymous({anonymous: true})
    console.log(anonymous)
}

   console.log(props)

return(
  
    <div className='myFeedbackContainer'>
      <h1>Do you have a great idea?</h1>  

    <div className='fbcategory'>
    <h1>Feedback Category:</h1>        

    <select className='dropDownMenu' value='selectCategory' onChange={(e)=> setfbInfo({...fbInfo, selectCategory: e.target.value})} >
        <option value='default'></option>
        <option value='Customer Experience'>Customer Experience</option>
        <option value='Internal Process'>Internal Process</option>
        <option value='Leadership'>Leadership</option>
        <option value='Product'>Product</option>
       
    </select>
     
    </div>    
    

    <textarea 
    className='myTextArea' 
    type='radio'
    value={fbInfo.fb} 
    onChange={(e)=> setfbInfo({...fbInfo, fb: e.target.value})}>
    </textarea>


    <br></br>
    <button className='mySubmit' onClick={submitFB}>Submit</button>
   
   <label className='anonymousbtn'>Submit anonymously?
    <input 
    type='radio' 
    value='Submit anonymously?' />
    </label>
    
    {/* <input 
   
    type='checkbox' 
    onChange={(e) => handleCheckbox(e.target.value)} /> 

    <input/> */}


  
    {/* <textarea className='myTextArea' value={fbInfo.fb} onChange={(e)=> setfbInfo({...fbInfo, fb: e.target.value})}></textarea>
    <br></br>
    <button className='mySubmit' onClick={submitFB}>Submit</button>
    <label>Submit anonymously? </label>
    
    <input 
   
    type='checkbox' 
    onChange={(e) => handleCheckbox(e.target.value)} /> 

    <input/> */}

    {/* {props.feedback.map((elem, index) => {
        return <div key={props.index}><h1>{elem}</h1></div>

    })} */}
    <h1></h1>
    <br></br>

    <br></br>
    <br></br>
    {/* <button>Edit</button>
    <button>Delete</button> */}
    
    
    
    </div>
)

}

const mapStateToProps = (reduxState) =>{
    return reduxState.fbReducer, reduxState.authReducer
    
    }

export default connect(mapStateToProps, {postFB, updateUser})(MyFeedback)
