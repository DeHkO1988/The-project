import { Link } from "react-router-dom";

export const Catalog = () => {
    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>Aliquam arcu arcu aliquam eu</h1>
            </div>
            <div className="panel-wrapper">
                <div className="panel">
                    <div className="img"><img className='image' src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" /></div>
                    <div className="title">
                        <h1>Lorem ipsum</h1>
                    </div>
                    <div className="border"></div>
                    <div className="content">
                        <p>Proin tempus leo id quam pellentesque sollic
                            itudin adipiscing velit imperdiet.</p>
                        <div className="button-link"><Link to={"/details"}>details</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}