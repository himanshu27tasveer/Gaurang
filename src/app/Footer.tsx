import Image from "next/image";
import "./Footer.css";

const Footer = (): JSX.Element => {
  let d = new Date();
  let n = d.getFullYear();
  return (
    <div id="footer">
      <div id="lgbtq"></div>
      <div className="socialbar">
        <div className="flex justify-center">
          <div className="socialimg">
            <a href="https://www.facebook.com/himanshu27.stu">
              <Image
                width={30}
                height={30}
                className="simg"
                alt="facebook"
                src="/assets/fb.svg"
              />
            </a>
          </div>
          <div className="socialimg">
            <a href="https://www.instagram.com/himanshu.tasveer">
              <Image
                width={30}
                height={30}
                className="simg"
                alt="instagram"
                src="/assets/instagram.svg"
              />
            </a>
          </div>
          <div className="socialimg">
            <a href="https://github.com/himanshu27tasveer">
              <Image
                width={30}
                height={30}
                className="simg"
                alt="github"
                src="/assets/github.png"
              />
            </a>
          </div>
          <div className="socialimg">
            <a href="https://www.linkedin.com/in/im-himanshu27">
              <Image
                width={30}
                height={30}
                className="simg"
                alt="linkedin"
                src="/assets/linkedin.svg"
              />
            </a>
          </div>
          <div className="socialimg">
            <a href="https://www.twitter.com/imhimanshu27">
              <Image
                width={30}
                height={30}
                className="simg"
                alt="twitter"
                src="/assets/twitter.png"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footerCopy">
        <p>
          No Copyright © 2024 {n > 2020 ? "-" + n : ""}{" "}
          <a href="https://himanshu.surge.sh" target="_blank_">
            tasveer
          </a>
          . No rights are reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
