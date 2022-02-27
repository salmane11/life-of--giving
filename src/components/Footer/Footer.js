import React from "react";
import SocialNetworks from "./SocialNetworks";
import styles from "./Footer.module.css";
import FooterQuote from "./FooterQuote";
import FooterButtons from "./FooterButtons";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import AndroidIcon from "@mui/icons-material/Android";
import RedditIcon from "@mui/icons-material/Reddit";
import Sponsor from "./Sponsor";

function Footer() {
  /**a list of our sponsors and their icons
   * which wil be mapped into Sponsor componenets*/
  const sponsors = [
    { name: "Apple", Icon: AppleIcon },
    { name: "Google", Icon: GoogleIcon },
    { name: "GitHub", Icon: GitHubIcon },
    { name: "Telegram", Icon: TelegramIcon },
    { name: "Android", Icon: AndroidIcon },
    { name: "Reddit", Icon: RedditIcon },
  ];
  return (
    <div className={styles.footer}>
      <div className={styles.subfooter}>
        <SocialNetworks />
        <FooterQuote />
        <FooterButtons />
      </div>
      <div className={styles.sponsors}>
        <h4 className={styles.sponsortitle}>Our Sponsors :</h4>
        {sponsors.map((sponsor) => (
          <Sponsor name={sponsor.name} Icon={sponsor.Icon} />
        ))}
      </div>
    </div>
  );
}
export default Footer;
