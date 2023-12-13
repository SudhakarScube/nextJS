import React from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children, ...props }) => {
  const headerData = {
    logoTitle: "image",
    ImgClass: "logo",
    fileName: "image",
    ImgSource: "/Logo.svg",
    ImgWidth: "106px",
    ImgHeight: "25px",
    ButtonData: [
      {
        ButtonClass: "button-white",
        buttonName: "Login",
        backgroundColor: "#fff",
        textColor: "#194BFB",
        buttonLink: "https://insight.orbitfin.ai/login",
      },
      {
        ButtonClass: "button-black",
        buttonName: "Signup",
        backgroundColor: "#194BFB",
        textColor: "#fff",
        buttonLink: "https://insight.orbitfin.ai/login",
      },
    ],
    menuItems: [
      {
        menuName: "Products & Solutions",
        MenuList: "megamenu",
        SubMenuData: {
          MenuData: [
            {
              ListTitlevariant: "h6",
              ListTitle: "Products",
              ListTitleClass: "list-title",
              SubList: [
                {
                  Link: "/insights",
                  logo: "/insights.svg",
                  primaryText: "Insight",
                  description:
                    "Stay up-to-date with the latest trends across vast amounts of unstructured data",
                },
                {
                  Link: "/extract",
                  logo: "/esg.svg",
                  primaryText: "ESG",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
                {
                  Link: "/data",
                  logo: "/China.svg",
                  primaryText: "Data Studio",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
                {
                  Link: "/china",
                  logo: "/Data-Studio.svg",
                  primaryText: "China",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
              ],
            },
            {
              ListTitlevariant: "h6",
              ListTitle: "Solutions",
              ListTitleClass: "list-title",
              SubList: [
                {
                  Link: "/solutions/tools",
                  logo: "https://images.ctfassets.net/f8prwnjrws8j/2Rt0k94Y7nnDkqK69fog9w/a1c5be3c480380988e8eb040f1b62e1d/tools.webp",
                  primaryText: "Tools",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
                {
                  Link: "/solutions/models",
                  logo: "https://images.ctfassets.net/f8prwnjrws8j/p4doaRbGhdh9k2fIit0to/ab4dd5adf8b48843507392b98cd349be/models.webp",
                  primaryText: "Models",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
                {
                  Link: "/solutions/data",
                  logo: "https://images.ctfassets.net/f8prwnjrws8j/63ammEJuOmJxRUSSqe10o8/3c5c2caaf675ecea43d5317085e96729/data.webp",
                  primaryText: "Data",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
              ],
            },
            {
              ListTitlevariant: "h6",
              ListTitle: "Use Cases",
              ListTitleClass: "list-title",
              SubList: [
                {
                  Link: "/usecase/research-analysts",
                  logo: "/research.svg",
                  primaryText: " Research Analysts",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
                {
                  Link: "/usecase/sustainability-teams",
                  logo: "/users.svg",
                  primaryText: "Sustainability Teams",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
                {
                  Link: "/usecase/quants",
                  logo: "/annual-report.svg",
                  primaryText: "Quants",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
                {
                  Link: "/usecase/data-science",
                  logo: "/folder.svg",
                  primaryText: "Data Science",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
                {
                  Link: "/usecase/data-teams",
                  logo: "/users.svg",
                  primaryText: "Data Teams",
                  description:
                    "Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam.",
                },
              ],
            },
          ],
        },
      },
      {
        menuName: "Articles",
        url: "/news",
      },
      {
        menuName: "About",
        url: "/about",
      },
      {
        menuName: "Contact",
        url: "/contact",
      },
    ],
  };

  const footerData = {
    backgroundColor: "#1A202C",
    Listitem: "true",
    ListImage: "true",
    ThemeType: "Dark",
    ImgSource: "/Logo-white.svg",

    MenuData: [
      {
        ListTitlevariant: "h4",
        ListTitle: "Useful Pages",
        grid: "3",
        ListTitleClass: "list-title",
        SubList: [
          {
            Link: "/insights",
            primaryText: "  What is Orbit insights?",
          },
          {
            Link: "/extract",
            primaryText: " What is Orbit Extract?",
          },
          {
            Link: "/china",
            primaryText: "  What is Orbit China?",
          },
        ],
      },
      {
        ListTitlevariant: "h4",
        ListTitle: "Essentials",
        grid: "3",
        ListTitleClass: "list-title",
        SubList: [
          {
            Link: "/terms-and-conditions",
            primaryText: "Terms & Conditions",
          },
          {
            Link: "/privacy-and-cookie-policy",
            primaryText: "Privacy & Cookie Policy",
          },
        ],
      },
      {
        ListTitlevariant: "h4",
        ListTitle: "Contact Info",
        grid: "3",
        ListTitleClass: "list-title",
        SubList: [
          {
            Link: "mailto:info@orbitfin.ai",
            primaryText: "Email: Email Orbit",
          },
          {
            Link: "https://orbitfin-next-js.vercel.app/",
            primaryText: "Web: Orbit Website",
            newWindow: "yes",
          },
        ],
      },
      {
        ListTitlevariant: "h4",
        ListTitle: "Affiliations",
        grid: "3",

        ListTitleClass: "list-title",
        SubList: [
          {
            ImgSource: "/footerlist.svg",
          },
          {
            address:
              "  We are proud to be a Fintech Member. For more information about the association visit the Investment Association.",
          },
        ],
      },
      {
        ListTitlevariant: "h4",
        grid: "6",

        ListTitle: "UK Office",
        ListTitleClass: "list-title",
        SubList: [
          {
            address: " 4 Moorgate, London, EC2R 6DA, United Kingdom",
          },
        ],
      },
      {
        ListTitlevariant: "h4",
        ListTitle: "China Office",
        ListTitleClass: "list-title",
        grid: "6",

        SubList: [
          {
            address:
              " Room 1106, Yiyang Road, Qixianling, High-tech Zone  Dalian, Liaoning Province",
          },
        ],
      },
    ],

    Mediadata: {
      copryrightdata:
        "Copyright 2016 - 2022 | Orbit Financial Technology Ltd | All Rights Reserved",
      mediaicon: [
        {
          link: "#",
          icon: "Twitter",
        },
        {
          link: "#",
          icon: "LinkedIn",
        },
        {
          link: "#",
          icon: "Facebook",
        },
        {
          link: "#",
          icon: "Youtube",
        },
      ],
    },
  };
  return (
    <>
      <Header data={headerData} />
      <main>{children}</main>
      <Footer data={footerData} Class={props?.Class} />
    </>
  );
};
