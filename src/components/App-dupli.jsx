import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserLists from './components/UserLists.jsx'

function App() {
    return <h1>App</h1>
}
// const [listnames, setnames] = useState([
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ]);
// const updatename = () => {
//   setnames(previousstate => {
//     return { ...previousstate, name: 'rads' };
//   });
// }
// return (
//   <>
//     <h2>List names</h2>
//     <p>{listnames.name}</p>
//     <p>{listnames.id}</p>
//     <ul>
//       {listnames.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//     <button onClick={updatename}>click me</button>
{/* <UserLists /> */ }
{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
//</>


export default App
