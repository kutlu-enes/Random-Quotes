import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export function LeftIcon() {
  return (
    <FontAwesomeIcon
      icon={faCircleLeft}
      className="text-xl text-blue-600"
    />
  );
}

export const RightIcon = () => (
  <FontAwesomeIcon
    icon={faCircleRight}
    className="text-xl text-blue-600"
  />
);

export const HeartIcon = ({ liked }) => (
  <FontAwesomeIcon
    icon={faHeart}
    className={`text-xl hover:scale-125 ${
      liked ? "text-red-600" : "text-gray-400"
    }`}
  />
);