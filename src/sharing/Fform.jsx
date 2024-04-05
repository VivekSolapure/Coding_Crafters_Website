import React, { useState } from 'react';
import 'firebase/storage';
import './Form.css';
import { useFirebase } from '../context/Firebase';

const Fform = () => {
    const [name, setNamedata] = useState("");
    const [email, setEmaildata] = useState("");
    const [Message, setMessagedata] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const namedata = (e) => {
        setNamedata(e.target.value);
    };

    const emaildata = (e) => {
        setEmaildata(e.target.value);
    };

    const Messagedata = (e) => {
        setMessagedata(e.target.value);
    };

  const firebase = useFirebase();

  

    const getdata = (e) => {
        e.preventDefault();
        

        if (!name || !email || !Message) {
            alert("Please fill in all fields.");
        } else {
            firebase.putData(`Feedback/${name}`,{
                Name:name,
                Email:email,
                Description:Message
              })
            };
            setSubmitted(true);
            alert("Thank You for Your FeedBack & We Will  Get Back to you Soon!");
        }


    return (
        <div className='main'>
            <div className='form'>
                <div className='container'>
                    <h2>FEEDBACK</h2>
                    <form className='feedback_form' method='POST'>
                        <input
                            type='text'
                            name='Name'
                            placeholder='Your name'
                            value={name}
                            autoComplete='off'
                            required
                            onChange={namedata}
                        />
                        <input
                            type='text'
                            name='email'
                            placeholder='Your email'
                            value={email}
                            autoComplete='off'
                            required
                            onChange={emaildata}
                        />
                        <textarea
                            name='Message'
                            placeholder='Write here your Message'
                            value={Message}
                            autoComplete='off'
                            required
                            onChange={Messagedata}
                        ></textarea>
                        <button onClick={getdata}>
                            {submitted ? 'Submitted' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Fform;
