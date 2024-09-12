import './Contact.css'
import mail_icon from './assets/mail_icon.svg'
import phone_icon from './assets/call_icon.svg'
import location_icon from './assets/location_icon.svg'

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
    
        // Checking that all fields are filled
        if (!name || !email || !message) {
            alert("All fields are required.");
            return;
        }
    
        const formData = new FormData(form);
    
        try {
            const response = await fetch("https://formspree.io/f/xanwzenj", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log("Success", result);
                
                alert("Your message has been sent successfully!");
                form.reset();  // Resetting the form after the user submits
            } else {
                throw new Error("Form submission failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("There was an issue sending your message. Please try again later.");
        }
    };
    


    return (
        <div id= 'contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
            </div>
            <div className='contact-container'>
                <div className="contact-left">
                    <h1>Let&apos;s Talk</h1>
                    <p>Have a project in mind? Want to collaborate on something? Feel free to reach out to me. I&apos;m always looking for new opportunities to learn and grow.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> 
                            <p>edgarufong@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phone_icon} alt="" /> 
                            <p>619-964-0738</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> 
                            <p>California, USA</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" placeholder="Enter your name" name="name" autoComplete="name" />

                    <label htmlFor="email">Your Email</label>
                    <input id="email" type="email" placeholder="Enter your email" name="email" autoComplete="email" />

                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" rows="8" placeholder="Enter your message" autoComplete="off"></textarea>

                    <button className="contact-submit" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact