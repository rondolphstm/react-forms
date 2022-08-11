import {useState, useEffect} from 'react'

export default function Form() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [vaildForm, setVaildForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [form, setForm] = useState({})
   
    // console.log(title)
    // const formSubmit = async (e) => {
  
    useEffect(() => {
      // fetch stuff
      if (form?.title?.length > 3 && form?.description?.length >10) {
        setVaildForm(true)
      }else{
        setVaildForm(false);
      }
    }, [form])
  
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
      const results = await fetch("https://sql.bocacode.com/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
      console.log(results)
      const data = await results.json()
      console.log(data)
  
      setVaildForm(true)
      setErrorMessage("")
      setFormSubmitted(true)
      alert("wow! Submitted")
    }
  
    console.log("this is form",form)
  
    const updateForm = (event) =>{
      setForm({...form, [event.target.name]:event.target.value})
    }
  
    return (
      <div className="App">
        <form onSubmit={formSubmit}>
          <h1>comments</h1>
          <label>title</label>
          <input
            type="text"
            name="title"
            // required
            // value={title}
            onChange={updateForm}
          />
          <h3>{form.title}</h3>
          {/* this is the description */}
          <label>Description</label>
          <textarea
            value={form.description}
            name="description"
            // required
            onChange={updateForm}
          ></textarea>
          <h3>{form.description}</h3>
  
          <label>Author</label>
          <select
            value={form.author} name ="author"
            onChange={updateForm}
          >
            <option value="" selected>
              chosse one
            </option>
            <option value="todd">todd</option>
            <option value="ludwigson">ludwigson</option>
            <option value="other">other</option>
          </select>
          <h3>{form.author}</h3>
          <button> send stuff back to parent</button>
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