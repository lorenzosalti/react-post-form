
import { useState } from "react"

function App() {

  const blankPost = {
    author: "",
    title: "",
    body: "",
    public: false
  }

  const [postData, setPostData] = useState(blankPost)

  function handlePostData(event) {

    const eventValue = event.target.type === "checkbox" ? event.target.checked : event.target.value

    setPostData(prev => ({
      ...prev,
      [event.target.name]: eventValue
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log('form inviato')
    console.log(postData)

    setPostData(blankPost)

  }


  return (
    <>
      <h1>Inserimento nuovo post</h1>

      <hr />

      <form onSubmit={handleSubmit}>

        {/* Autore del post */}
        <input
          type="text"
          name="author"
          value={postData.author}
          onChange={handlePostData}
          placeholder="Autore del post"
        />

        {/* Titolo del post */}
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handlePostData}
          placeholder="Titolo del post"
        />

        {/* Corpo del post */}
        <input
          type="text"
          name="body"
          value={postData.body}
          onChange={handlePostData}
          placeholder="Corpo del post"
        />

        {/* Pubblicazione del post */}
        <label htmlFor="public">Pubblicazione del post</label>
        <input
          type="checkbox"
          name="public"
          checked={postData.public}
          onChange={handlePostData}
        />

        <button type="submit">Invia Post</button>

      </form>

    </>
  )
}

export default App
