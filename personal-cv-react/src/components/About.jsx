import Card from "./Card";

function About() {
return (
<Card title="About Me">
<p>This is my personal profile.</p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                        .small-image {\n                            width: 200px;\n                            height: 200px;\n                        }\n                    "
            }}
          />
          <img src="images/profile.jpg" alt="Profile photo" className="small-image" />
          <p> Likes games, computers and anime</p>
          <p>
            Email:
            <a href="mailto:bris.ian2005@gmail.com">bris.ian2005@gmail.com</a>
            <br />
            GitHub:
            <a href="https://github.com/IKAB005">https://github.com/IKAB005</a>
          </p>
          </Card>
);
};
export default About;