import data from '../utils/data';
import Icons from '../components/Icons';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

function ContactMe() {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onChange' });

    const sendEmail = (formData) => {
        emailjs
            .send(
                'service_9hm7z9n',
                'template_quu9p4d',
                formData,
                'yFSJu2eq24K-axRJu'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        reset();
    };
    return (
        <div className='contact-me'>
            <div className='contact-me-top'>
                <h2 className='contact-me-top__title'>Get in Touch</h2>
                <div className='contact-me-top__description-container'>
                    <p className='contact-me-top__description'>
                        {data.contact}
                    </p>
                    <Icons></Icons>
                </div>
            </div>

            <div className='contact-me__form-section'>
                <h2 className='contact-me__form-section-title'>Contact Me</h2>
                <form
                    onSubmit={handleSubmit(sendEmail)}
                    noValidate
                    className='contact-me__form'
                >
                    <label className='contact-me__form-label'>Name*</label>
                    <input
                        name='name'
                        type='text'
                        className={
                            errors.name
                                ? 'contact-me__form-input contact-me__form-input_type_error'
                                : 'contact-me__form-input'
                        }
                        placeholder='Insert your name here…'
                        {...register('name', {
                            required: `This field is
                      required`,
                            minLength: {
                                value: 2,
                                message: `Name must be at least 2 charcters long`,
                            },
                        })}
                    />
                    {errors.name ? (
                        <p className='contact-me__form-input-error'>
                            {errors.name.message}
                        </p>
                    ) : (
                        ''
                    )}
                    <label className='contact-me__form-label'>
                        Email Address*
                    </label>
                    <input
                        className={
                            errors.email
                                ? 'contact-me__form-input contact-me__form-input_type_error'
                                : 'contact-me__form-input'
                        }
                        name='email'
                        placeholder='email@example.com'
                        {...register('email', {
                            required: `This field is
                      required`,
                            minLength: {
                                value: 5,
                                message: `Must be at least 5 charcters long`,
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                message: `Please enter a valid email`,
                            },
                        })}
                    />
                    {errors.email ? (
                        <p className='contact-me__form-input-error'>
                            {errors.email.message}
                        </p>
                    ) : (
                        ''
                    )}
                    <label className='contact-me__form-label'>Message</label>
                    <input
                        className='contact-me__form-input'
                        name='message'
                        type='text'
                        placeholder='How can I help?'
                        {...register('message')}
                    ></input>
                    <button
                        disabled={!isValid ? true : false}
                        className={
                            !isValid
                                ? 'contact-me__form-button contact-me__form-button_disabled'
                                : 'contact-me__form-button'
                        }
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
