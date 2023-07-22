"use client"

import React from 'react'
import styles from "@/app/contact/contact.module.css"
import {Mulish} from "next/font/google";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})



const ContactForm = () => {


const [user ,setUser]= React.useState(
    {
        "username" : "",
        "email"  :  "",
        "phone" : "",
        "message" : "",
    }
)

const [status, setStatus] = React.useState(null);


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus('success');
        } else {
            setStatus('error');
        }

    }catch (e) {
        console.log(e)
    }

}

function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value})
    console.log(setUser)
}


  return (
    
<form onSubmit={handleSubmit} className={styles.contact_form}>
    <div className={styles.input_field}>
    <label htmlFor="username" className={styles.label}>
        Enter your user name:
        <input type="text" name="username" id="usernmae" onChange={handleChange}/>
    </label>
    </div>
    <div className={styles.input_field}>
    <label htmlFor="email" className={styles.label}>
        Enter your user email:
        <input type="email" name="email" id="email" onChange={handleChange} />
    </label>
    </div>
    <div className={styles.input_field}>
    <label htmlFor="phone" className={styles.label}>
        Enter your user phone:
        <input type="phone" name="phone" id="phone" onChange={handleChange}/>
    </label>
    </div>
    <div className={styles.input_field}>
    <label htmlFor="message" className={styles.label}>
        Enter your user message:

        <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange}/>
    </label>
    </div>
    <div>
    {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}> There was an error submitting your message. Please try again.</p>}
                <button type="submit" className={mulish.className}>submit now</button>

    </div>
</form>
    
  )
}

export default ContactForm