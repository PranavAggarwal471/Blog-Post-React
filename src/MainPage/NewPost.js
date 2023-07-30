import React from 'react'

const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <main className='NewPost'>
      <h1>New Post</h1>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input  
          id='postTitle'
          type='text'
          // placeholder='Title'
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        ></input>
        <label htmlFor='postBody'>Post</label>
        <textarea
          id='postBody'
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type='submit'> 
          Submit
        </button>
      </form>
    </main>
  )
}

export default NewPost