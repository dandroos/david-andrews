import React from 'react'

export default function ContactForm() {
    return (
        <div>
            <form name="contact" method="post">
                <div className="row">
                    <div className="form-group col-sm">
                        <label htmlFor="name-input">Name</label>
                        <input type="text" className="form-control" id="name-input" />
                    </div>
                    <div className="form-group col-sm">
                        <label htmlFor="email-input">Email</label>
                        <input type="email" className="form-control" id="email-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm">
                        <label htmlFor="phone-input">Phone</label>
                        <input type="tel" className="form-control" id="phone-input" />
                    </div>
                    <div className="form-group col-sm">
                        <label htmlFor="topic">Topic</label>
                        <select class="custom-select" id="topic">
                            <option selected>Topic</option>
                            <option value="1">Quote</option>
                            <option value="2">Advice</option>
                            <option value="3">General</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message-input">Message</label>
                    <textarea className="form-control" id="message-input" />
                    </div>
                        <button type="submit" class="btn btn-block btn-primary"><i className="fas fa-paper-plane" style={{ paddingRight: 5 }}></i>Submit</button>
                </form>
        </div>
    )
}
