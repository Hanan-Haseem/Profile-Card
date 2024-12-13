import PropTypes from "prop-types";
const UserData= [

{
    
    name: "James",
    city: "New York",
    description: "Full-Stack Developer",
    skills: ["HTML/CSS", "JavaScript", "Bootstrap", "TypeScript", "Vue.js", "GitHub", "Webpack"],
    online:true,
    profile: "images/2.jpg",     
},
{
    name:"Sarah",
    city:"London",
    description:"Front-end Developer",
    skills:["HTML/CSS", "JavaScript", "Responsive Design", "Version Control/Git", "Angular", "React","Node"],
    online:false,
    profile: "images/4.jpg",     
},
{
    
    name: "Ethan",
    city: "Sydney",
    description: "React Developer",
    skills: ["HTML/CSS", "JavaScript", "SASS", "Responsive Design", "React", "Redux", "GraphQL"],
    online:true,
    profile: "images/3.jpg",     
},
];

function User(props){
    return (
    <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>
            {props.online ? "ONLINE" : "OFFLINE" }</span>
        <img src={props.profile} className="img" alt=""/> 
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline"> Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}
export const UserCard = () => {
  return ( 
  <>
   {UserData.map((user, index) =>(
        <User key={index} 
        name={user.name}
        city={user.city}
        description={user.description} 
        online={user.online}
        profile={user.profile}
        skills={user.skills}
        />
    ))} 
        


  </>
  );
};

User.protoTypes = {
    name: PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
   skills: PropTypes.arrayOf(PropTypes.string).isRequired,
   online: PropTypes.string.isRequired,
   profile: PropTypes.string.isRequired
};