// hooks
import { useState } from "react"

// axios
import axios from "axios"



function App() {

  // valori iniziali form vuoto
  const blankPost = {
    author: "",
    title: "",
    body: "",
    public: false
  }

  // variabili di stato
  const [postData, setPostData] = useState(blankPost)


  // modifica valori degli input
  function handlePostData(event) {

    // controllo valore checkbox o text input
    const eventValue = event.target.type === "checkbox" ? event.target.checked : event.target.value

    // modifica della variabile di stato
    setPostData(prev => ({
      ...prev,
      [event.target.name]: eventValue
    }))
  }


  // gestione invio del form
  function handleSubmit(event) {
    event.preventDefault()

    console.log('form inviato')
    console.log(postData)

    // axios.post()


    // azzeramento dopo l'invio dei valori inseriti
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
