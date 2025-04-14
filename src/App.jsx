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
    // console.log(postData)

    // chiamata POST con axios
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', postData)
      .then(response => {
        console.log(response.data)
        console.log(response.status)

        alert(response.statusText)
      })
      .catch(error => {
        console.log(error.response)

        alert(
          `Error: ${error.response.status}
          ${error.response.statusText}`
        )
      })


    // azzeramento dopo l'invio dei valori inseriti
    setPostData(blankPost)
  }


  return (
    <>
      <h1>Inserimento nuovo post</h1>

      <hr />

      <form onSubmit={handleSubmit}>

        {/* Autore del post */}
        <label htmlFor="author">Autore del post</label> <br />
        <input
          type="text"
          name="author"
          value={postData.author}
          onChange={handlePostData}
          placeholder="Inserisci autore"
        />

        <hr />

        {/* Titolo del post */}
        <label htmlFor="title">Titolo del post</label> <br />
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handlePostData}
          placeholder="Inserisci titolo"
        />

        <hr />

        {/* Corpo del post */}
        <label htmlFor="body">Corpo del post</label> <br />
        <input
          type="text"
          name="body"
          value={postData.body}
          onChange={handlePostData}
          placeholder="Inserisci corpo"
        />

        <hr />

        {/* Pubblicazione del post */}
        <label htmlFor="public">Pubblicazione del post</label>
        <input
          type="checkbox"
          name="public"
          checked={postData.public}
          onChange={handlePostData}
        />

        <hr />

        <button type="submit">Invia Post</button>

      </form>

    </>
  )
}

export default App
