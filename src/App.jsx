function App() {
  return (
    <div className="container">
      <hgroup>
        <article>
          <img src="images/group.svg" />
          <h1>Meet the <i style={{color:"SteelBlue"}}>StarGazers</i></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={ () => alert("HIII") }>Click Me</button>
        </article>
      </hgroup>
    </div>
  )
}
export default App
