import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "teodora.markova1@abv.bg",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:teodora.markova1@abv.bg"
    },
    {
      type: "phone",
      label: "088 797 9904",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+359887979904"
    }
  ],
  socialItems: [
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://www.facebook.com/share/18WVCbpZ7P/?mibextid=wwXIfr"
    }
  ]
};


const educationData = {
  education: [
    {
      title: "Медицински Университет Плевен",
      description: "Студент, трети курс • 2023 – сега"
    },
    {
      title: "Средно образование",
      description: "Завършила 2023"
    }
  ],
  skills: [
    {
      name: "Отговорност",
      icon: "/images/home/education-skill/figma-icon.svg",
      rating: 5
    },
    {
      name: "Организираност",
      icon: "/images/home/education-skill/photoshop-icon.svg",
      rating: 5
    },
    {
      name: "Работа в екип",
      icon: "/images/home/education-skill/sketch-icon.svg",
      rating: 5
    },
    {
      name: "Комуникация",
      icon: "/images/home/education-skill/adobe-icon.svg",
      rating: 4
    },
    {
      name: "Емпатия",
      icon: "/images/home/education-skill/framer-icon.svg",
      rating: 5
    },
    {
      name: "Внимание към детайла",
      icon: "/images/home/education-skill/invision-icon.svg",
      rating: 4
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Facebook",
      href: "https://www.facebook.com/share/18WVCbpZ7P/?mibextid=wwXIfr"
    }
  ],
  contactInfo: [
    {
      type: "email",
      label: "teodora.markova1@abv.bg",
      link: "mailto:teodora.markova1@abv.bg"
    },
    {
      type: "phone",
      label: "088 797 9904",
      link: "tel:+359887979904"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
