import Table from "./componenets/Table"
function App() {
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]

    return (
      <div className='App'>
        <h1>hello  from componenet</h1>
        <Table characterData={characters} />
        </div>
    )
  }
  
  export default App