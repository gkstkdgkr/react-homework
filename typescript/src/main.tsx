//@ts-nocheck

import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function Profile({ name, status = "tving", size = 234 }) {
  let profilePath = "";
  let message = "";

  switch (status) {
    default:
      case "tving":
        profilePath = "/icons/icon_tving.png";
        description = "티빙 기본 프로필";
        break;
      case "bear":
        profilePath = "/icons/icon_bear.png";
        description = "곰인형 프로필";
        break;
      case "girl":
        profilePath = "/icons/icon_girl.png";
        description = "소녀 프로필";
        break;
      case "man":
        profilePath = "/icons/icon_man.png";
        description = "소년 프로필";
        break;
  }

  const label = `${name} (${message})`;

  return (
    <figure className="Profile" aria-label={label} title={label}>
      <img src={profilePath} alt={name} width={size} height={size} />
    </figure>
  );
}

function ProfileList() {
  return (
    <ul className="ProfileList">
      <li>
        <Profile name="티빙" status="tving" />
      </li>
      <li>
        <Profile name="곰인형" status="bear" />
      </li>
      <li>
        <Profile name="소녀" status="girl" />
      </li>
      <li>
        <Profile name="소년" status="man" />
      </li>
    </ul>
  );
}
const container = document.getElementById("root");

if (container) {
  createRoot(container).render(<ProfileList />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
