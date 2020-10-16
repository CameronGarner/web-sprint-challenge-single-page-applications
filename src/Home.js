import React from "react";
import { Link} from 'react-router-dom'

let Home = function(){
return (
<div>
    <h1>Build Your Own Pizza!</h1>
    <Link to="/pizza">
        Click Here!
    </Link>
</div>
)
}

export default Home