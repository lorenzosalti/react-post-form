
import { useState } from "react"

function App() {

  const [postData, setPostData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  function handlePostData(event) {
    const eventValue = event.target.type === "checkbox" ? event.target.checked : event.target.value

    setPostData(prev => ({
      ...prev,
      [event.target.name]: eventValue
    }))
  }


  return (
    <>
      <h1>Inserimento nuovo post</h1>

      <hr />

      <form>

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
        <input
          type="checkbox"
          name="public"
          value={postData.public}
          onChange={handlePostData}
          placeholder="Pubblicazione del post"
        />

      </form>

    </>
  )
}

export default App
