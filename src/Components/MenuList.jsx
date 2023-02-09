import React from "react";
import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";
import { BiPulse } from "react-icons/bi";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Accueil",
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Découvrir",
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artistes",
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
  },
  {
    id: 6,
    icon: <BsFillHouseFill />,
    name: "Accueil",
  },
  {
    id: 7,
    icon: <FaPodcast />,
    name: "Podcasts",
  },
];

export { MenuList };
