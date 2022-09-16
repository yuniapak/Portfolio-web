import Nav from '../components/Nav'
import { useForm, ValidationError } from '@formspree/react'
import TextareaAutosize from 'react-textarea-autosize'
const Contact = () => {
  const [state, handleSubmit] = useForm('moqbengo')
  if (state.succeeded) {
    return (
      <div>
        <Nav />
        <p className="answer">
          Thank you for your email, I'll come back to you as soon as I can.
        </p>
      </div>
    )
  }
  return (
    <div>
      <Nav />
      <h3>Email me</h3>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your email"
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextareaAutosize
            id="message"
            name="message"
            minRows={5}
            placeholder="your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default Contact
