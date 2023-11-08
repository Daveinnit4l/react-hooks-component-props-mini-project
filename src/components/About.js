function About(props){
  return(
<div>
<aside>
<img src={props.imageSrc || "https://via.placeholder.com/215"} alt="blog logo" />
</aside>
<p>{props.aboutText}</p>

</div>

  )
}

export default About;