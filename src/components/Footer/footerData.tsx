import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SocialLink } from "../../types/socialLink";

export const socialsLinks: SocialLink[] = [
  {
    icon: <AiFillFacebook />,
    to: "https://www.facebook.com/",
  },
  {
    icon: <AiOutlineTwitter />,
    to: "https://twitter.com/",
  },
  {
    icon: <AiOutlineInstagram />,
    to: "https://instagram.com/",
  },
];
