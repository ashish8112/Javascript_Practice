function ProfileCard({name,branch,bio})
{
    return(
      <div>
        <h2>{name}</h2>
        <p>Branch: {branch}</p>
        <p>Bio: {bio}</p>
        <SkillBadge skill={"NodeJs"}/>
        <SkillBadge skill={"MongoDB"}/>
        <SkillBadge skill={"ExpressJs"}/>
      </div>
    );
}

function WelcomeBanner({collegeName,tagline})
{
  return(
    <div>
      <h2>Welcome in {collegeName}</h2>
      <h3>Tagline : {tagline}</h3>
    </div>
  )
}
function SkillBadge({skill}){
  return(
    <>
      <pre>['{skill}']</pre>
    </>
  )
}

function Welcome()  //or write here export default App
{
  return(
    <div>
      <WelcomeBanner collegeName="Kristu Jayanti University" tagline={"Where Coders Meet"} /> 
      <ProfileCard name="Ashu" branch="CSE" bio="I love Coding" />
      <ProfileCard name ="Rahul" branch="ECE" bio="I love businnes"/>
      <ProfileCard name ="Vikas" branch="CSE" bio="I love gym"/>
    </div>
  )
}

export default Welcome;