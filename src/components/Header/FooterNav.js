const FooterNav = () => {
  return (
    <div className="footer">
      <div className="social-links mb-4 text-center">
        <a
          href="https://www.facebook.com/kevinsteven.guzmanbarrera/"
          className="facebook"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a
          href="https://www.instagram.com/__kevin_guzman__/"
          className="instagram"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a
          href="https://bit.ly/kevin_guzman-linkedln"
          className="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="mailto:guzmankevin90@gmail.com" className="email">
          <ion-icon name="mail"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default FooterNav;
