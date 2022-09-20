import React from 'react'
import {useParams} from 'react-router-dom'

function DynamicPage() {
  const {manufactor, product} = useParams()
  return (
    <div>
      <h1>This is {product} page by {manufactor}</h1>
    </div>
  )
}

export default DynamicPage