import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/massege-icon.png'
import mail_icon from '../../assets/mail-icon2.png'
import phone_icon from '../../assets/phone_icon2.png'
import location_icon from '../../assets/location_icon2.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "4aeea69b-7a66-4e0a-9729-5aa1f9cbea77");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };



    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a massege <img src={msg_icon} alt="" /> </h3>
                <p>If you have any question feel free to contact us and find out more about what we do  </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> Contact at info@techvision.ly</li>
                    <li> <img src={phone_icon} alt="" /> +218-925-500-111</li>


                    <li> <img src={location_icon} alt="" />  Benghazi <br />   in Eastern Libya
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label >Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label >Your Phone</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobile Namber' required />
                    <label >Write Your Massage</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required ></textarea>
                    <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>
                    <span>{result}</span>
                </form>
            </div>

        </div>
    )
}

export default Contact