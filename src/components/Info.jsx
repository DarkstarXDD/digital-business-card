import About from "./About"
import Interests from "./Interests"

export default function Info() {
  return (
    <div className="info">
      <div className="info-hero flex-column">
        <div className="name-role-wrapper flex-column">
          <h1 className="title">Laura Smith</h1>
          <p className="role">Frontend Developer</p>
        </div>
        <a className="website" href="#">
          laurasmith.website
        </a>
        <div className="flex-row buttons-wrapper">
          <a className="btn btn-email" href="#">
            <div className="flex-row btn-wrapper">
              <svg
                className="icon-email"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              Email
            </div>
          </a>
          <a className="btn btn-linkedin" href="#">
            <div className="flex-row btn-wrapper">
              <svg
                className="icon-linkedin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              Linkedin
            </div>
          </a>
        </div>
      </div>
      <div className="descriptions flex-column">
        <About />
        <Interests />
      </div>
    </div>
  )
}
