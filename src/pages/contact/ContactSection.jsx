import React from 'react';
import '../../App.css';
import './ContactSection.scss';

function ContactSection() {

    file.onload = function() {
        setPreview(file.result);
      }

    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    return (

        <div className='contact-container'>

            <div className='contact-info-wrap'>

                <div className='left-container'>

                    <div className='logo-black-container'/>

                </div>
                <div className='right-container'>

                    <h30>
                        Phone
                    </h30>
                    
                    <p30>
                        000-XXX XX XX<br/>
                        Our phone hours are between 9:00 AM and 5:00 PM, Monday through Friday.
                    </p30>



                    <h30>
                        Adress
                    </h30>
                    
                    <p30>
                        PHILIP & PEN<br/>
                        Make-Believe Lane 00<br/>
                        000 00 LUND
                    </p30>
                    


                    <h30>
                        Socials
                    </h30>
                    
                    <p30>
                        Follow us on our <a href="https://www.instagram.com/kira.and.minou/" target="blank">social media!</a>
                    </p30>



                    <h30>
                        Poetry competition 2024!
                    </h30>
                    
                    <p30>
                        Here, you can submit your entries for our poetry competition.<br/>By participating, you agree that we reserve the right to publish your texts on our website.
                    </p30>


                    <form className="max-w-md border border-gray-200 rounded p-6 mx-auto" onSubmit={handleOnSubmit}>
                        <FormRow className="mb-5">
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <InputText id="name" name="name" type="text" />
                        </FormRow>

                        <FormRow className="mb-5">
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <InputText id="email" name="email" type="email" />
                        </FormRow>
                        
                        <FormRow className="mb-5">
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <InputText id="message" name="message" type="text" />
                        </FormRow>

                        <FormRow className="mb-5">
                            <FormLabel htmlFor="image">Image</FormLabel>
                            <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            }
                            </div>
                        </FormRow>

                        {preview && (
                            <p className="mb-5">
                            <img src={preview as string} alt="Upload preview" />
                            </p>
                        )}

                        <Button>Submit</Button>
                    </form>

                </div>
            
            </div>

        </div>

    )
}

export default ContactSection