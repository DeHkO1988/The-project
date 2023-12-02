import { Link } from "react-router-dom";
export const CarPanel = ({
    _id,
    image,
    brand,
}) => {

    return (
        <div className="panel">
            <div className="img"><img className='image' src={image} /></div>
            <div className="title">
                <h1>{brand}</h1>
            </div>
            <div className="border"></div>
            <div className="content">
                {/* <p>{price} $</p> */}
                <div className="button-link"><Link to={`/details/${_id}`}>details</Link></div>
            </div>
        </div>
    );
}