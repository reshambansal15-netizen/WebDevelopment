function Team(){

const team=[

{

name:"Rahul Sharma",

position:"CEO"

},

{

name:"Priya Verma",

position:"Lead Developer"

},

{

name:"Ankit Gupta",

position:"UI Designer"

}

];

return(

<section className="team-section">

<div className="container">

<h2 className="section-title">

Leadership Team

</h2>

<div className="row">

{

team.map((member,index)=>(

<div
className="col-md-4"
key={index}
>

<div className="team-card">

<div className="team-image">

👨‍💼

</div>

<h4>

{member.name}

</h4>

<p>

{member.position}

</p>

</div>

</div>

))

}

</div>

</div>

</section>

)

}

export default Team;