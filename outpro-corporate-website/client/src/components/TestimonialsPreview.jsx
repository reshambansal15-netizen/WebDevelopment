function TestimonialsPreview(){

const reviews=[

{

name:"Rohan",

review:"Excellent service and outstanding support."

},

{

name:"Neha",

review:"Professional team with amazing results."

},

{

name:"Amit",

review:"Highly recommended for business solutions."

}

];

return(

<section className="container py-5">

<h2 className="section-title">

Testimonials

</h2>

<div className="row">

{

reviews.map((review,index)=>(

<div
className="col-md-4"
key={index}
>

<div className="testimonial-card">

⭐⭐⭐⭐⭐

<p>

"{review.review}"

</p>

<h5>

{review.name}

</h5>

</div>

</div>

))

}

</div>

</section>

)

}

export default TestimonialsPreview;