import React from 'react'

// ------------------------table header

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}


//--------------------------table body

const TableBody = () => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return (
    <tbody > {rows} </tbody> 
  )
}
function Table() {
  const { characterData } = this.props

  return (
    <table>
        <TableHeader />
        <TableBody characterData={characterData}  />
  </table>

  )
}

export default Table