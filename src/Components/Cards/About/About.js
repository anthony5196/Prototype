import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Profile from "../../logow.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  We need to know how much the user has scrolled through a page. The offsetY 
  variable above is going to contain the number of pixels scrolled from 
  the top of the page, and the default value was set to 0. Now we need to 
  offset the Y axis in order to have the background and page content 
  move at diiferent rates of change; while also updating it once the scroll 
  position has changed. For that we create an event listener for "scroll".
  event. This event will fire whenever the page is scrolled, and will 
  provide us with the Y axis offset. We want to initialiaze it as soon 
  as the component mounts so we need a "useEffect" hook with an empty 
  dependent list. Inside of this hook, I will initialize a "scroll" event 
  listener on a "window" object. In the callback function, we will set 
  the new Y axis offset. We can get it  using "windows.pageYOffset". 
  Then we to update our "offsetY" state with a new value,and we will create a 
  "handleScroll" function for that. Because "handleScroll" is an event listener,
  and we have to make sure to remove it if the component gets unmounted. Otherwise, 
  the listener will continue to be active after the component is gone resulting 
  in memory leak. We dont want that in our app so lets create a React hook analog of 
  componentWillUnmount lifecycle method. For that we simply need to return a function 
  from our  "useEffect" hook. Inside of this function, we will call the "removeEventListener"
  method and pass our "handleScroll" function as a second argument. when the component 
  is about to unmount this arrow function will be called and the listener will be removed. 
  Please note, that you have to declare your callback function in a variable or ortherwise
  you wont be able to remove the event listener. All we need to do is apply "translateY" function
  to our background image dynamically whenever the "offsetY" state is changed. The easiest way to do 
  that in react is to pass that as an inline style using the "style" prop. Now we need to transform 
  the image, and the transformation function is going to be "translateY"
*/

  return (
    <div id="About">
      <div className="About">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Joe Lepe</strong>
                <br /> Welcome to my website. I am a budding Web Developer
                seeking to use the arsenal of tools and skills I have acquired
                to aid a team in a professional environment. Initially, coding
                for me was a means to stability, but as I have dug deeper into
                this highly complex world, I can’t help but to be enchanted by
                what yet awaits me. With the seemingly infinite amount of new
                challenges awaiting me at everyturn, I have been able to foster
                and maintain my passion for programming. Seeking an opportunity
                to garner experience, maintain and expand current knowledge,
                while also consistently learning new technologies.
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1LebJLvJOoWsaJAtghdouVWjCKUv-zRTX/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/anthony5196"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/joe-lepe123/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
