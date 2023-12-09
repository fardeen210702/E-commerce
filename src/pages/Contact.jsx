import React from 'react'

function Contact() {
  return (
    <div className='contact-container'>
      <h1>CONTACT US!!</h1>
      <div className="main-contact-sec">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1744744691005!2d78.5661551737101!3d17.403412602346204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ecc814edf1d%3A0x3dfc6ad00d1acb20!2sUppal%20Bus%20Stop%20Rd%2C%20Uppal%2C%20Hyderabad%2C%20Telangana%20500039!5e0!3m2!1sen!2sin!4v1699443245554!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" ReferrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>




        <div className="contact-page">
          <div className="info-page">
            <div className="text-about">
              <h1>Need Additional Information</h1>
              <p>You can also contact us through our E-mail or Phone</p>

            </div>
            <div className="icon">
            <i class="fa-solid fa-phone"></i>
            <h3>+1234567890</h3>
            </div>
            <div className="icon">
            <i class="fa-solid fa-envelope"></i>
            <h3>fardeenmohd1251@gmail.com</h3>
            </div>
            <div className="icon">
            <i class="fa-solid fa-paper-plane"></i>
            <h3>India,Telengana</h3>
            </div>
          </div>
          <div className="form-page">

          <form action="https://formspree.io/f/meqbdqdn" className="Form" method='POST'>
            <label htmlFor="">USERNAME:
            <input type="text" required autoComplete='off' name='Username' placeholder='Ex : "Fardeen" '  />

            </label>
            <label htmlFor="">EMAIL:
            <input type="email" required autoComplete='off' name='Email' placeholder='Ex : fardeenmohd1251@gmail.com' />

            </label>
            <label htmlFor=""> Tell us about Your Experience:
              
            <textarea placeholder='Message..' name="Message"  cols="30" rows="10"></textarea>
            </label>
            <input type="submit" value="Send" className='btn'/>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact