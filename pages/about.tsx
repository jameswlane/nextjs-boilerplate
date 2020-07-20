import React, { ReactElement } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import useSWR from 'swr'

type Data = {
  title: string
  content: string
}

const About = (): ReactElement => {
  const { data, error } = useSWR<Data>('/api/pages/about')

  if (error) return <Alert variant="danger">failed to load</Alert>

  if (!data)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )

  return (
    <>
      <h1 data-testid="page-title" className="mt-5">
        {data.title}
      </h1>
      <p data-testid="page-content" className="lead">
        {data.content}
      </p>
    </>
  )
}

export default About
