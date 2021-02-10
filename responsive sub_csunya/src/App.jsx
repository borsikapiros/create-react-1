import './App.css';
import './style.scss';
import React, { useContext, useState } from 'react';


// create the context, so you can use the <DisplayformContext.Provider>
const DisplayFormContext = React.createContext([]);

/**Context.value will be like:
 * context = displayForm: boolean
 * 
 * context = {
 *    displayForm: boolean,
 *    name: string
 *    ...
 * }
 * 
 * context.name
 * 
 */

function Join() {
  return (
    <div className="joinUs">
      <h1>Join our community</h1>
      <h2>30-day, hassle-free money back guarantee</h2>
      <p>Gain access to our full library of tutorials along with expert code reviews.
      Perfect for any developers who are serious about honing their skills.
      </p>
    </div>
  )
}

function MonthlySub() {

  // get the actual value and setValue from the DisplayFormContext
  const ctx = useContext(DisplayFormContext);
  const context = ctx[0];
  const setDisplayForm = ctx[1];
  // these 3 lines are the same as: 
  // const [context, setDisplayForm] = useContext(DisplayFormContext);

  const btnOnClick = () => {
    setDisplayForm({
      ...context,           // copy the previous context's properties here, e.g. name, date
      /**
       * ...context (which is a shortcut) equivalent syntax:
       * {
       *    displayForm: context.displayForm,
       *    name: context.name,
       *    date: context.date,
       *    address: context.address
       * }
       * 
       * Shallow copy syntax (only highest level is copied: key-value pairs):
       * 
       * {...oldObj}
       * 
       */

      displayForm: true     // replace only the displayForm value with true
    });
  }

  return (
    <div className="monthly">
      <h3>Monthly Subscription</h3>
      <span className="price">$29</span>
      <span className="per">per month</span>
      <p>Full access for less than $1 a day</p>
      <button type="button" className="btn" onClick={btnOnClick} >Sign Up<span className="tooltiptext">Sign up now!</span></button>
    </div>

  )
}

function WhyUs() {
  return (
    <div className="whyUs">
      <h3>Why Us</h3>
      <ul>
        <li>Tutorials by industry experts</li>
        <li>Peer & expert code review</li>
        <li>Coding exercises</li>
        <li>Access to our GitHub repos</li>
        <li>Community forum</li>
        <li>Flashcard decks</li>
        <li>New videos every week</li>
      </ul>
    </div>
  )
}

function CustomForm() {
  const [context, setContext] = useContext(DisplayFormContext);

  // this could also be used instead of context:
  //const inputs = {
  //  name: '',
  //  date: '',
  //  address: ''
  //}
  //const [formValue, setFormValue] = useState(inputs);

  function submitOnClick() {
    setContext({
      ...context,
      displayForm: false
    });
    console.log('name: ', context.name);
    console.log('address: ', context.address);
    console.log('date: ', context.date);
  }

  function handleChange(event) {
    const fieldName = event.target.id;
    const fieldValue = event.target.value;
    const newState = {
      ...context,
    };

    newState[fieldName] = fieldValue;     // same as: newState.name = name.value | but variables can only be used as object key in this obj[variable] format, otherwise it would think
                                          // we're referring to event.target.value as an object.key.whatever
    

    /** this magic is equivalent with this:
    if (fieldName === 'name') {
      newState.name = fieldValue;
    } else if (fieldName === 'address')
      newState.address = fieldValue;
      ...
      */
    
    setContext(newState);
    // tell context to set the new values and tell everyone who uses this value -> they'll be re-rendered
  }
      
  return context.displayForm === true ? (
    <>
      <div className="customFormBg"></div>

      <div className="customForm">
        <h2>Create an account</h2>
        <label htmlFor="name">Your name:</label><br />
        <input id="name" type="text" onChange={ handleChange }></input><br />
        <label htmlFor="date">Your date of birth:</label><br />
        <input id="date" type="date" onChange={ handleChange }></input><br />
        <label htmlFor="address">Billing address:</label><br />
        <input id="address" type="text" onChange={ handleChange }></input><br />
        <button type="button" className="btn" onClick={submitOnClick}>Submit</button>
        <p>Already a member?</p>
        <button type="button" className="btn">Sign in</button>
      </div>
    </>
  ) : '';

}

function App() {
  const defaultShowForm = false;
  // create a react state which will be the default context value
  // the "useState" must be placed inside a JSX function (which returns with a tag <>)
  // the DisplayFormContext will "provide" the DisplayFormContext for the inner components === you can use "useContext(DisplayFormContext)"" in your functions
  const [value, setValue] = useState(defaultShowForm);
  
  return (
    <DisplayFormContext.Provider value={[value, setValue]}>
      <div className="app">
        <Join></Join>
        <div className="blues">
          <MonthlySub></MonthlySub>
          <WhyUs></WhyUs>
        </div>
       <CustomForm></CustomForm>
      </div>


    </DisplayFormContext.Provider>
  );
}

export default App;
