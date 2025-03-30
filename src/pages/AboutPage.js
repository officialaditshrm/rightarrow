import Slideshow from '../components/Slideshow.js';
import Footer from '../components/Footer.js';
function AboutPage() {
    return (
      <>
        <div id="heading">
          <h1>Welcome</h1>
        </div>
        <div id="slideshow">
          <Slideshow />
        </div>
        <div id="writeup" style={{ fontStyle: "italic" }}>
          <p>
            Sign in for your account to access{" "}
            <b>
              <abbr id="writeupabbr" title="A daily life letter that you read online">
                Right Arrow
              </abbr>
            </b>{" "}
            on your device.
            <br />
            <br />
          </p>
        </div>
        <Footer/>
      </>
    );
}
export default AboutPage;