import { ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Client } from "contentful/contentfulEntry";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Referance field function decleraceion
export default function FooterMediaRef({ Id }) {
  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    getEntrydd(Id);
  }, []);

  const getEntrydd = async (id) => {
    let detail = await Client.getEntry(id);
    setUpdateData(detail);
  };
  return (
    <ListItem>
      <a
        href={updateData?.fields?.link}
        className="media-list"
        aria-label={updateData?.fields?.title}
      >
        {updateData?.fields?.title === "Facebook" && (
          <FacebookTwoToneIcon className="media-icon" />
        )}
        {updateData?.fields?.title === "Twitter" && (
          <TwitterIcon className="media-icon" />
        )}
        {updateData?.fields?.title === "Instagram" && (
          <InstagramIcon className="media-icon" />
        )}
        {updateData?.fields?.title === "LinkedIn " && (
          <LinkedInIcon className="media-icon" />
        )}
        {updateData?.fields?.title === "Tiktok" && (
          <svg
            viewBox="0 0 24 24"
            size="16"
            color="white-60"
            className="icon-base__IconBase-sc-1efctcf-0 bJVCrB"
          >
            <g fill="currentColor">
              <path
                fill="currentColor"
                d="M18.265 6.42a4.371 4.371 0 0 1-.379-.223 5.353 5.353 0 0 1-.974-.838 4.674 4.674 0 0 1-1.098-2.292h.004c-.083-.496-.049-.817-.044-.817h-3.309V15.2c0 .174 0 .346-.007.515l-.003.064c0 .009 0 .019-.002.028v.008a2.866 2.866 0 0 1-.429 1.307c-.246.393-.585.72-.985.95-.417.24-.89.366-1.37.365-1.541 0-2.79-1.272-2.79-2.843s1.249-2.844 2.79-2.844c.293 0 .583.046.86.138l.004-3.41a6.077 6.077 0 0 0-2.513.199 6.123 6.123 0 0 0-2.223 1.203c-.57.502-1.05 1.1-1.417 1.769-.14.243-.667 1.223-.73 2.812-.041.903.227 1.837.354 2.224v.008c.08.227.392 1.004.899 1.658.408.525.891.986 1.433 1.369v-.008l.008.008c1.602 1.101 3.378 1.029 3.378 1.029.308-.013 1.338 0 2.508-.561a6.305 6.305 0 0 0 2.035-1.548 6.455 6.455 0 0 0 1.11-1.866c.3-.797.4-1.752.4-2.134V8.77c.04.024.574.382.574.382s.77.5 1.972.825c.862.231 2.024.28 2.024.28V6.933c-.407.044-1.233-.086-2.08-.513Z"
              />
            </g>
          </svg>
        )}
      </a>
    </ListItem>
  );
}
