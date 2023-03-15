import React, {  useRef, useState } from 'react';
import { useForm } from "react-hook-form";



const ContactForm = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [data, setData] = useState("");  //for testing purposes only
  
  const feedbackDiv = useRef();
  const feedbackText = useRef();
  const responseDiv = useRef()
  const responseText = useRef(); 
  const submitBtn = useRef();

  const onSubmit = (data, e) => 
 {
	e.preventDefault();
	sendEmail(data);
	setData(JSON.stringify(data));
	//alert(JSON.stringify(data));
	//sendingAnimation();
 } 
 
  //fade in and out doesn't work
  function sendingAnimation() {
	feedbackDiv.current.classList.add("pop-down");
	feedbackText.current.classList.add("fade-in");
	setTimeout(function () {
		feedbackDiv.current.classList.remove("pop-down");
		feedbackText.current.classList.add("fade-out");
		feedbackDiv.current.classList.add("pop-up");
	}, 1500);
	setTimeout(function () {
		feedbackDiv.current.classList.remove("pop-up");
		feedbackText.current.classList.remove("fade-out", "fade-in");
	}, 2500);
  }

  function responseSuccess() {
	setTimeout(function () {
		responseDiv.current.classList.add("pop-down", "bg-success");
		responseText.current.classList.add("fade-in");
		responseText.current.innerHTML = `Message Sent Successfully <i class="fas fa-check ms-2"></i>`;
		//contactFormBtn.classList.remove("disable-click");
	}, 2500);
}

function responseError() {
	setTimeout(function () {
		responseDiv.current.classList.add("pop-down", "bg-danger");
		responseText.current.classList.add("fade-in");
		responseText.current.innerHTML = `Error - Please Try Again <i class="fas fa-undo ms-2"></i>`;
	}, 2500);
}

const test = () => {
	sendingAnimation();
	responseError();
}

const sendEmail = async (formValues) => {
	submitBtn.current.classList.add("disable-click");
	sending();
	formValues["to"] = "admin@valeinfo.co.uk";
	formValues["website"] = "www.valebuilding.com";
	const response = await fetch(
		'https://csharpsendgridwithresponse.azurewebsites.net/api/SendGridWithResponseCSharp',
		{
			method: "POST",
			contentType: "application/json",
			body: JSON.stringify(formValues),
		}
	);
	try {
		let bodyresponse = await response.json();
		if (
			response.status === 200 &&
			bodyresponse.message != null &&
			bodyresponse.message == "Email Sent"
		) {
			responseSuccess();
			//actions.resetForm();
		} else {
			responseError();
		}
	} catch (err) {
		responseError();
	}
	submitBtn.remove.classList.add("disable-click");
};

		//let publicUrl = process.env.PUBLIC_URL + '/'
		return <div className="ltn__contact-message-area mb-120 mb--100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="ltn__form-box contact-form-box box-shadow white-bg">
							<h2>ToDO</h2>
							<ul>
								<li>Animated Responses</li>
								<li>Send the data to the server, and email myself</li>
								<li>Display the response</li>
							</ul>
							<h4 className="title-2">Get In Touch</h4>
							{/* <form id="contact-form" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}> */}
							<form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
								<div className="row">
									<div className="col-md-6">
										<div className="input-item input-item-name ltn__custom-icon">
											<input type="text" name="name" placeholder="Enter your name" className='mt-3 mb-0'
											{...register("name", { required: true })}
											aria-invalid={errors.name ? "true" : "false"} 
											/>
											{errors.name?.type === 'required' && <p role="alert" className="danger mt-0 mb-0">* Name is required</p>}
										</div>
									</div>
									<div className="col-md-6">
										<div className="input-item input-item-email ltn__custom-icon">
											<input type="email" name="email" placeholder="Enter email address" className='mt-3 mb-0'
											{...register("email", { required: true })}
											aria-invalid={errors.email ? "true" : "false"}
											/>
											{errors.name?.type === 'required' && <p role="alert" className="danger mt-0 mb-0">* Email is required</p>}
										</div>
									</div>
									{/* <div className="col-md-6">
										<div className="input-item" >
											<select className="nice-select" name="service">
												<option>Select Service Type</option>
												<option>Property Management </option>
												<option>Mortgage Service </option>
												<option>Consulting Service</option>
												<option>Home Buying</option>
												<option>Home Selling</option>
												<option>Escrow Services</option>
											</select>
										</div>
									</div> */}
									<div className="col-md-6">
										<div className="input-item input-item-phone ltn__custom-icon">
											<input type="text" name="phone" placeholder="Enter phone number" className='mt-3 mb-0'
											 {...register("number")}/>
										</div>
									</div>
								</div>
								<div className="input-item input-item-textarea ltn__custom-icon ">
									<textarea name="message" placeholder="Enter message" defaultValue={""} className='mt-3 mb-0'
									{...register("message", { required: true })}
									aria-invalid={errors.email ? "true" : "false"}
									/>
									{errors.message?.type === 'required' && <p role="alert" className="danger mt-0 mb-3">* Message is required</p>}
								</div>
								{/* <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p> */}
								
								<div id="feedback" ref={feedbackDiv}>
									<p id="feedback-text" className='feedback-text' ref={feedbackText}  >Sending...</p>
								</div>
								<div id="response" ref={responseDiv}>
									<p id="response-text" style={{ color: '#ffffff' }} ref={responseText}></p>
								</div>
								<div className="btn-wrapper mt-0" ref={submitBtn}>
									<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Send Message</button>
								</div>
								<p className="form-message mb-0 mt-20" />
								<button onClick={test}>Test</button>
								<p>{data}</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	//}
}

export default ContactForm