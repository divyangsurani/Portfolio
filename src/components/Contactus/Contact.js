import React, { useEffect } from 'react'
import Particle from "../Particle";

const Contact = () => {
    useEffect(() => {
        document.title = "Divyang | Contact Us"
      }, [])
    return (
        <>
            <Particle/>
        <div className='container pt-4 mt-4' style={{
            color: '#cd5ff8',
        }}>
            <div >
                <h1 className="display-4 pt-4 mt-4" >Contact Us </h1>

                    <section className="py-3 py-md-5 py-xl-8">                      
                      <div className="container">
                            <div className="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
                                <div className="col-12 col-lg-6">
                                    <div className="border overflow-hidden">

                                        <form method='post' action="https://formspree.io/f/movabgzv">
                                            <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                                <div className="col-12">
                                                    <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="fullname" name="fullname" placeholder='Enter Your Name'  required />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <span className="input-group-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cd5ff8" className="bi bi-envelope" viewBox="0 0 16 16">
                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                            </svg>
                                                        </span>
                                                        <input type="email" className="form-control" id="email" name="email" placeholder='Enter Your Email' required />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cd5ff8" className="bi bi-telephone" viewBox="0 0 16 16">
                                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                            </svg>
                                                        </span>
                                                        <input type="tel" className="form-control" id="phone" name="phone" placeholder='Enter Your Numbur' />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="subject" className="form-label">Subject <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="subject" name="subject" placeholder='Enter Subject'  required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                                                    <textarea className="form-control"placeholder='Enter Your Message' id="message" name="message" rows="3" required></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="row justify-content-xl-center">
                                        <div className="col-12 col-xl-11">
                                            <div className="row mb-sm-4 mb-md-5">
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-4 mb-sm-0">
                                                        <div className="mb-3 text-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#cd5ff8" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h4 className="mb-2">Phone</h4>
                                                            <p className="mb-2">Please speak with us directly.</p>
                                                            <hr className="w-75 mb-3 border-dark-subtle"/>
                                                                <p className="mb-0">
                                                                    <a className="link-secondary text-decoration-none text-light" href="tel:+919328158761"  >(+91)9328158761</a>
                                                                </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <div className="mb-4 mb-sm-0">
                                                        <div className="mb-3 text-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#cd5ff8" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h4 className="mb-2">Email</h4>
                                                            <p className="mb-2">Please write to us directly.</p>
                                                            <hr className="w-75 mb-3 border-dark-subtle"/>
                                                                <p className="mb-0">
                                                                    <a className="link-secondary text-decoration-none text-light" href="mailto:divyangsurani49@gmail.com" >divyangsurani49<span className='text-white'>@</span>gmail.com</a>
                                                                </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>

        </div>
        </>
    )
}

export default Contact
