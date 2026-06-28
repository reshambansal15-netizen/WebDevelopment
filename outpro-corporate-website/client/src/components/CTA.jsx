import { Link } from "react-router-dom";

function CTA(){

return(

<section className="cta-section">

<div className="container text-center">

<h2>

Ready To Start Your Project?

</h2>

<p>

Let's build something amazing together.

</p>

<Link
to="/contact"
className="btn btn-warning btn-lg"
>

Contact Us

</Link>

</div>

</section>

)

}

export default CTA;