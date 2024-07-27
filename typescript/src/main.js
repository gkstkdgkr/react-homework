import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
function Profile(_a) {
    var name = _a.name, _b = _a.status, status = _b === void 0 ? "tving" : _b, _c = _a.size, size = _c === void 0 ? 234 : _c;
    var profilePath = "";
    var message = "";
    switch (status) {
        default:
        case "tving":
            profilePath = "/icons/icon_tving.png";
            message = "티빙 기본 프로필";
            break;
        case "bear":
            profilePath = "/icons/icon_bear.png";
            message = "티빙 기본 프로필";
            break;
        case "girl":
            profilePath = "/icons/icon_girl.png";
            message = "티빙 기본 프로필";
            break;
        case "man":
            profilePath = "/icons/icon_man.png";
            message = "티빙 기본 프로필";
            break;
    }
    var label = "".concat(name, " (").concat(message, ")");
    return (React.createElement("figure", { className: "Profile", "aria-label": label, title: label },
        React.createElement("img", { src: profilePath, alt: name, width: size, height: size })));
}
function ProfileList() {
    return (React.createElement("ul", { className: "ProfileList" },
        React.createElement("li", null,
            React.createElement(Profile, { name: "\uD2F0\uBE59", status: "tving" })),
        React.createElement("li", null,
            React.createElement(Profile, { name: "\uACF0\uC778\uD615", status: "bear" })),
        React.createElement("li", null,
            React.createElement(Profile, { name: "\uC18C\uB140", status: "girl" })),
        React.createElement("li", null,
            React.createElement(Profile, { name: "\uC18C\uB144", status: "man" }))));
}
var container = document.getElementById("root");
if (container) {
    createRoot(container).render(React.createElement(ProfileList, null));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
