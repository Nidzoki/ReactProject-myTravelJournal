import LocationIcon from "../location_icon.svg"


export default function Card({props, key}){

    return(<div className="card-container">
    <div className="card-img">
        <img src={props.imageUrl} alt="location"/>
    </div>
    <div className="card-details">
        <div className="card-location">
            <img src={LocationIcon} alt="location-icon"/>
            <h4>{props.location.toUpperCase()}</h4>
            <a href={props.googleMapsUrl} className="google-maps-link">View on Google Maps</a>
        </div>
        <h1 className="card-title">{props.title}</h1>
        <h4 className="date">{props.startDate} - {props.endDate}</h4>
        <p className="card-description">{props.description}</p>
    </div>
</div>
    )
}
