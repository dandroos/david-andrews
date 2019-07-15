import React from 'react'

export default function ContactForm() {
    return (
        <div>
            <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field" />
                <div className="row">
                    <div className="form-group col-sm">
                        <label htmlFor="name-input">Name</label>
                        <input type="text" className="form-control" name="name" id="name-input" required />
                    </div>
                    <div className="form-group col-sm">
                        <label htmlFor="email-input">Email</label>
                        <input type="email" className="form-control" name="email" id="email-input" required />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm">
                        <label htmlFor="phone-input">Phone</label>
                        <input type="tel" className="form-control" name="phone" id="phone-input" />
                    </div>
                    <div className="form-group col-sm">
                        <label htmlFor="topic">Topic</label>
                        <select defaultValue="DEFAULT" className="custom-select" name="topic[]" id="topic" required>
                            <option value="DEFAULT" disabled>Please pick an option</option>
                            <option value="1">Quote</option>
                            <option value="2">Advice</option>
                            <option value="3">General</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message-input">Message</label>
                    <textarea className="form-control" name="message" id="message-input" required />
                    </div>
                        <button type="submit" className="btn btn-block btn-primary"><i className="fas fa-paper-plane" style={{ paddingRight: 5 }}></i>Submit</button>
                </form>
        </div>
    )
}
