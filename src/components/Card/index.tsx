
import "./styles.css"

import Star  from '../../assets/star.svg';
import { ReactNode } from "react";

export interface CardProps {
  ratingAvarage: number
  ratingCount: number
  price: number
  description: string
  from: string
  status?: string
  image: string
  available?: number
}

function getImagePath(file: string): string {
  return new URL(`/src/assets/${file}`, import.meta.url).href
}

function handleBadgeMessage(val?: number): JSX.Element | void {
  if(val === undefined) return
  return <div className="card--badge">{val > 0 ? 'Online' : 'Sold Out'}</div>
}

export default function Card(props:CardProps): JSX.Element {
  return (
    <div className="card">
      {handleBadgeMessage(props.available) as ReactNode}
      <img className="card--image" src={getImagePath(props.image)} alt="Card Image" />
      <div className="card--stats">
        <img className="card--star" src={Star} alt="Star Icon Rating" />
        <span className="mr-1">{props.ratingAvarage}</span>
        <span className="text-gray-400">({props.ratingCount}) • {props.from}</span>
      </div>
      { props.description && <p>{props.description}</p> }
      { props.price && <p><strong className="font-semibold">From ${props.price }</strong> / person</p>}
    </div>
  )
}