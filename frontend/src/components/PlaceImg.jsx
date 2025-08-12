import Image from "../assets/logo.png";

export default function PlaceImg({ place, index = 0, className = "w-64" }) {
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }
  return <Image className={className} src={place.photos[index]} alt="" />;
}
