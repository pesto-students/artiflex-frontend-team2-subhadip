import { HorizontalDivider } from "@cred/neopop-web/lib/components";
import { Typography, HorizontalSpacer } from "@cred/neopop-web/lib/components";
import "./FooterComponent.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Typography
          color="#FFFAE5"
          fontSize={16}
          fontType="body"
          fontWeight={700}
        >
          ARTIFLEX © 2022-2023
        </Typography>
        <div className="social-media">
          <Typography
            className="link"
            color="#FFFAE5"
            fontSize={16}
            fontType="body"
            fontWeight={400}
          >
            GitHub
          </Typography>
          <Typography
            className="link"
            color="#FFFAE5"
            fontSize={16}
            fontType="body"
            fontWeight={400}
          >
            Reddit
          </Typography>
          <Typography
            className="link"
            color="#FFFAE5"
            fontSize={16}
            fontType="body"
            fontWeight={400}
          >
            LinkedIn
          </Typography>
        </div>
      </div>
      <Typography
        className="link"
        color="#FFFAE5"
        fontSize={16}
        fontType="body"
        fontWeight={400}
      >
        Terms & policies
      </Typography>
      <Typography
        className="link"
        color="#FFFAE5"
        fontSize={16}
        fontType="body"
        fontWeight={400}
      >
        Privacy policy
      </Typography>
      <Typography
        className="link"
        color="#FFFAE5"
        fontSize={16}
        fontType="body"
        fontWeight={400}
      >
        Brand guidelines
      </Typography>
      <HorizontalDivider className="one" color="#FFFAE5" />
      <HorizontalDivider className="two" color="#FFFAE5" />
      <HorizontalDivider className="three" color="#FFFAE5" />
      <HorizontalDivider className="four" color="#FFFAE5" />
      <HorizontalDivider className="five" color="#FFFAE5" />
      <HorizontalDivider className="six" color="#FFFAE5" />
      <HorizontalDivider className="seven" color="#FFFAE5" />
      <HorizontalDivider className="eight" color="#FFFAE5" />
      <HorizontalDivider className="nine" color="#FFFAE5" />
      <HorizontalDivider className="ten" color="#FFFAE5" />
      <HorizontalDivider className="ten" color="#FFFAE5" />
      <HorizontalDivider className="ten" color="#FFFAE5" />
      <HorizontalDivider className="ten" color="#FFFAE5" />

      <HorizontalDivider className="eleven" color="#FFFAE5" />
      <HorizontalDivider className="twleve" color="#FFFAE5" />
      <HorizontalDivider className="thirteen" color="#FFFAE5" />
      <HorizontalDivider className="fourteen" color="#FFFAE5" />
      <HorizontalDivider className="fifteen" color="#FFFAE5" />
      <HorizontalDivider className="sixteen" color="#FFFAE5" />
      <HorizontalDivider className="seventeen" color="#FFFAE5" />
      <HorizontalDivider className="eightteen" color="#FFFAE5" />
      <HorizontalDivider className="nineteen" color="#FFFAE5" />
      <HorizontalDivider className="twenty" color="#FFFAE5" />
    </footer>
  );
};

export default Footer;
