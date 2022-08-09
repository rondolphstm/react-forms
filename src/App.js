import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [vaildForm, setVaildForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [title, settitle] = useState("")
  const [description, setDescription] = useState("your description")
  const [author, setAuthor] = useState("other")
  // console.log(title)
  // const formSubmit = async (e) => {

  useEffect(() => {
    // fetch stuff
    if (title.length > 3 && description.length >10) {
      setVaildForm(true)
    }else{
      setVaildForm(false);
    }
  }, [title, description, author])

  // }
  
  async function formSubmit(e) {
    e.preventDefault()

    if (!vaildForm) {
      setErrorMessage("not a vaild form")
      return
    } else{
    }
    setErrorMessage("")
    try {
    } catch (error) {
      console.error(error)
      setErrorMessage(
        "there was a freaking error submitting comment" + error.toString
      )
    }

    // console.log("form submitted")

    // const comment ={
    //   title:title,
    //   description:description,
    //   author:author,
    // }

    const comment = {
      title,
      description,
      author,
    }
    console.log("form submitted with", comment)
    // really submit it to an
    const results = await fetch("https://sql.bocacode.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
    console.log(results)
    const data = await results.json()
    console.log(data)

    setVaildForm(true)
    setErrorMessage("")
    setFormSubmitted(true)
    alert("wow! Submitted")
  }

  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <h1>comments</h1>
        {/* here goes the title */}
        <label>title</label>
        <input
          type="text"
          // required
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <h3>{title}</h3>
        {/* this is the description */}
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        ></textarea>
        <h3>{description}</h3>
        {/* this is the author */}
        <label>Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        >
          <option value="" selected>
            chosse one
          </option>
          <option value="todd">todd</option>
          <option value="ludwigson">ludwigson</option>
          <option value="other">other</option>
        </select>
        <h3>{author}</h3>
        {!formSubmitted && <button>submit form</button>}
        {errorMessage && (
          <h1>
            {" "}
            there was an error: <br />
            {errorMessage}
          </h1>
        )}
      </form>
    </div>
  )
}

export default App
