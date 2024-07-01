import '../styles/Contact.css';

function Contact() {
  return (
    <>
      <a
        href="https://github.com/codegregcode"
        target="_blank"
        data-testid="github-link-contact"
      >
        <div id="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/greg-cain/"
        target="_blank"
        data-testid="linkedin-link-contact"
      >
        <div id="linkedin" />
      </a>
      <div id="email" data-testid="email-link-contact" />
    </>
  );
}

export default Contact;
