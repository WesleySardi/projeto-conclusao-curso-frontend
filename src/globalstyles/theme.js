const theme = {
  colors: {
    red: "#E90000",
    white: "#F5F5F5",
    lightWhite: "#F7F7F7",
    green: "#6c7d47",
    lightGreen: "#307615",
    black: "#202020",
    lightBlack: "#1D1B1B",
    grey: "#919191",
    blue: "#005F73",
    yellow: "#e1ad01",
    orange: "#FE9900",
    darkMode: "#2A2A2A",
    bgDarkMode: "#161616",
    lightMode: "#E9E7E7",
    bgLightMode: "#f0f0f0",

    /* ScrollBar */

    // Chrome and Safari
    thumbBgColor: "blue",
    trackBgColor: "#f0f0f0",

    // Firefox
    scrollbarColor: "blue #f0f0f0",

    // IE and Edge
    scrollbarThumb: "blue",
    scrollbarTrack: "#f0f0f0",
  },
  fonts: {
    sizes: {
      primary: "17px",
      small: "12px",
      medium: "16px",
      large: "24px",
      xlarge: "32px",
    },
    family: {
      primary: '"Roboto", sans-serif',
      secondary: '"Open Sans", sans-serif',
      tertiary: "",
    },
  },
  spacing: {
    xsmall: "4px",
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
  },
  borders: {
    radius: {
      small: "4px",
      medium: "8px",
      large: "16px",
    },
    widths: {
      thin: "1px",
      thick: "2px",
    },
  },
  images: {
    topBarIcons: {
      phoneIcon: "../img/icones/phoneIcon.png",
      locationIcon: "../img/icones/locationIcon.png",
      wsIcon: "../img/icones/wsIcon.png",
    },
    headerIcons: {
      darkModeIcon: "",
      ecommerceIcon: "",
    },
    headerCompanyLogo: "../img/logos/logo_zlo_png.png",
    headerCompanyLettersLogo: "",
    mainBannerImgsCarousel: {
      img1: "../img/backgrounds/backgroundHomeIdosos1.png",
      img2: "../img/backgrounds/backgroundHomeIdosos2.png",
      img3: "../img/backgrounds/backgroundHomeIdosos3.png",
    },
    mainBannerImgs: {
      wsBalloonImg: "../img/icones/wsBalloonImage.png",
      leftArrowImg: "",
      rightArrowImg: "",
    },
    absoluteImg: "../img/logos/logo_zlo_png.png",
    absoluteDotsImg: "../img/icones/dotsImage.png",
    cardsImgs: {
      card1Img: "../img/cards/braceletRedNoBG.png",
      card2Img: "../img/cards/braceletGreenNoBG.png",
      card3Img: "../img/cards/braceletBlueNoBG.png",
    },
    bannerImg: "../img/banners/bannerTec.jpg",
    halfBannerImg: "../img/banners/bannerReduzido.png",
    cardCarouselImgs: {
      card1Img: "../img/cards/Card3.png",
      card2Img: "../img/cards/Card2.png",
      card3Img: "../img/cards/Card1.png",
      card4Img: "../img/cards/Card3.png",
      card5Img: "../img/cards/Card2.png",
    },
    formImgs: {
      robotImg: "/img/banners/robotImg.png",
      envelopeImg: "../img/icones/CardIcon.png",
    },
    footerZloLogo: "../img/logos/logo_zlo_png.png",
    footerIcons: {
      icon1: "../img/icones/tiktokIcon.png",
      icon2: "../img/icones/instagramIcon.png",
      icon3: "../img/icones/facebookIcon.png",
      icon4: "../img/icones/youtubeIcon.png",
      icon5: "../img/icones/linkedinIcon.png",
    },
  },
  links: {
    home: "/",
    produtos: "/",
    blog: "/",
    contato: "/",
    ecommerce: "/",
    confiraJa: "/",
    qualASuaDuvida: "/",
    card1: "/buyBracelet",
    card2: "/buyBracelet",
    card3: "/buyBracelet",
    banner: "/",
    post1: "/",
    post2: "/",
    post3: "/",
    post4: "/",
    post5: "/",
    tiktok: "/",
    instagram: "/",
    facebook: "/",
    youtube: "/",
    linkedin: "/",
    entrarEmContato: "/",
    faleConosco: "/",
    quemSomos: "/",
    trabalheConosco: "/",
    nossaCultura: "/",
    ninjaAi: "/",
    calculadoraDeResistores: "/",
    tabelasDeConversao: "/",
  },
  mainTexts: {
    cardsUpperText:
      "De pulseiras inteligentes a soluções personalizadas, oferecemos tecnologia que apoia pessoas com dependências a superar desafios diários. Com nossos produtos inovadores e expertise, garantimos que você tenha o suporte necessário para enfrentar e vencer as dificuldades do dia a dia.",
    card1Text:
      "Componentes Eletrônicos, Cabos e Fios, Químicos, Ferramentas, Pilhas e Baterias, Informática, Elétrica, Conversores, Adaptadores, Rede, Robótica, IOT e ",
    card2Text:
      "Profissionais especializados na montagem de cabos de áudio, vídeo, dados/serial, energia para facilitar ainda mais o seu dia a dia ou da sua empresa!",
    card3Text:
      "Profissionais especializados na montagem de cabos de áudio, vídeo, dados/serial, energia para facilitar ainda mais o seu dia a dia ou da sua empresa!",
    footerZloLogoText:
      "Somos um grupo de estudantes dedicados a desenvolver soluções de segurança e monitoramento. Desde 2021, focamos em inovação e cuidado ao criar dispositivos como pulseiras de localização, para garantir a proteção e tranquilidade de quem você ama.",
  },
  breakpoints: {
    mobile: "(max-width: 700px)",
    tablet: "(max-width: 1024px)",
    smallDesktop: "(max-width: 1279px)",
    largeDesktop: "(max-width: 1366px)",
    hugeDesktop: "(min-width: 1367px)",
  },
};

export default theme;
