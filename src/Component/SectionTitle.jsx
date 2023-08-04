import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <>
      <div className="sectionTitle">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  )
}

export default SectionTitle
