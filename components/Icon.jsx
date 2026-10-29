


"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faHeart, faQuoteLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'

export default function Icon({ name, className }) {

  const icon = {
    heart: faHeart,
    heartOutline: faHeartRegular,
    quote: faQuoteLeft,
    search: faSearch,
    AngleDown: faAngleDown
  }

  const { heart, heartOutline, quote, search, AngleDown } = icon;

  const iconMap = {
    heart,
    heartOutline,
    quote,
    search,
    AngleDown
  }

  const selectedIcon = iconMap[name];

  return <FontAwesomeIcon icon={selectedIcon} className={className}/>;

}