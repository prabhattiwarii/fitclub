import React, { useRef, useState } from 'react';
import './Join.css';
import emailjs from 'emailjs-com';

const Join = () => {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		setIsSubmitting(true);

		emailjs
			.sendForm('service_5hmgqrn', 'template_30t49xu', form.current, '4q5jqKgqqswMJvPGc')
			.then(
				(result) => {
					console.log(result.text);
					setIsSubmitted(true);
				},
				(error) => {
					console.log(error.text);
					setIsSubmitted(false);
				}
			)
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<div className="join">
			<div className="left-j">
				<hr />
				<div>
					<span className="stroke-text">READY TO </span>
					<span>LEVEL UP</span>
				</div>
				<div>
					<span>YOUR BODY </span>
					<span className="stroke-text">WITH US?</span>
				</div>
			</div>
			<div className="right-j">
				{!isSubmitted ? (
					<form ref={form} className="email-container" onSubmit={sendEmail}>
						<input type="email" name="user_email" placeholder="Enter your Email address" required />
						<button className="btn btn-j" disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Join Now'}
						</button>
					</form>
				) : (
					<div className="submitted-message">Thank you for joining!</div>
				)}
			</div>
		</div>
	);
};

export default Join;
