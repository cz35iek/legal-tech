import React, { useState, useEffect } from 'react';
import Proposal from "./proposal"

export default function Proposals() {
  const [hasError, setErrors] = useState(false)
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [proposal, setProposal] = useState({})
  const [proposals, setProposals] = useState([])

  async function fetchData() {
    const res = await fetch(
      'https://api.surveyjs.io/private/Surveys/getSurveyResults/83e2dbb2-b4a6-4631-901a-3d92f91725bf?accessKey=dade5a6c382a4252a9bd8dc27eb0e216'
    )

    res
      .json()
      .then((res) => {
        setProposals(res.Data)
        setCount(res.ResultCount)
        setIndex(res.ResultCount - 1)
        setProposal(res.Data[index])
      })
      .catch((err) => setErrors(err))
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const onKeyDown = (e) => {
    if (e.code === 'ArrowLeft' && index > 0) {
      e.preventDefault()
      setIndex(index - 1)
      setProposal(proposals[index - 1])
    }
    if (e.code === 'ArrowRight' && index < count - 1) {
      e.preventDefault()
      setIndex(index + 1)
      setProposal(proposals[index + 1])
    }
  }

  return (
    <div tabIndex="0" style={{ outline: 'none' }} onKeyDown={onKeyDown}>
      <Proposal {...proposal} />
    </div>
  )
}
