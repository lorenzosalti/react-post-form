
import { useState } from "react"

function App() {

  const [postData, setPostData] = useState({
    author: "",
    title: ""
  })

  function handlePostData(event) {
    setPostData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }


  return (
    <>
      <h1>Inserimento nuovo post</h1>

      <hr />

      <form>

        <input
          type="text"
          name="author"
          value={postData.author}
          onChange={handlePostData}
          placeholder="Autore del post"
        />


        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handlePostData}
          placeholder="Titolo del post"
        />

      </form>

    </>
  )
}

export default App
