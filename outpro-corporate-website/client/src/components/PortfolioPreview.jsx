import p1 from "../assets/images/portfolio1.jpg";
import p2 from "../assets/images/portfolio2.jpg";
import p3 from "../assets/images/portfolio3.jpg";

function PortfolioPreview() {

const projects=[

{
image:p1,
title:"Business Website"
},

{
image:p2,
title:"Mobile Application"
},

{
image:p3,
title:"Dashboard UI"
}

];

return(

<section className="container py-5">

<h2 className="section-title">

Latest Projects

</h2>

<div className="row">

{projects.map((project,index)=>(

<div
className="col-md-4 mb-4"
key={index}
>

<div className="portfolio-card">

<img
src={project.image}
className="img-fluid"
/>

<h4 className="mt-3">

{project.title}

</h4>

</div>

</div>

))}

</div>

</section>

)

}

export default PortfolioPreview;