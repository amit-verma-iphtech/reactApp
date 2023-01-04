import React from "react";
//import reactDom from "react-dom";

const ContactForm = () => {
    return(
        <>
        <div className="contact_form pt-5" style={{background:"#f9f9f9", padding:"50px"}}>
            <form>
            <div className="row">
                <div className="col">
                  <label htmlFor="FullName">FullName</label>
                   <input type="text" className="form-control" placeholder="Enter Your FullName..." name="FullName" required/>
                </div>
                <div className="col">
                   <label htmlFor="LastName">LastName</label>
                   <input type="text" className="form-control" placeholder="Enter Your LastName" name="LastName" required/>
                   <div className="invalid-feedback">Please fill out this field.</div>
                </div>
            </div>
            <div className="row pt-4">
                 <label htmlFor="Subject">Subject</label>
                 <input type="text" className="form-control" placeholder="Enter Your Subject..." name="subject" required/> 
                 <div className="invalid-feedback">Please fill out this field.</div> 
            </div>

            <div className="row pt-4">
                 <label htmlFor="comment">Comments:</label>
                 <textarea className="form-control" rows="5" id="comment" name="text"></textarea>  
            </div>

            <div className="row pt-4">
            <button type="submit" class="btn btn-primary">Submit</button> 
            </div>
            </form>
        </div>
        
        </>
    )
}
export default ContactForm;