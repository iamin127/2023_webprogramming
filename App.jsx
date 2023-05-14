import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const [row, setRow] = useState([]);

  useEffect(() => {
    console.log('mount or update');
  

  return () => {
    console.log('upmount');
  };
});  

  useEffect(() => {
    console.log('mount only');
    fetch("http://openAPI.seoul.go.kr:8088/525472726269616d37357678677061/json/RealtimeCityAir/1/25/").then(
      function(res2) {
        res2.json().then(function(res3) {
          setRow(res3.RealtimeCityAir.row);
        })
      }
    )
  }, []);

  useEffect(() => {
    console.log('update only, row')
  }, [row]);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Resort</h1>
      <table>
        <thead>
          <tr>
          <th>이름</th>
          <th>PM10</th>
          <th>O3</th>
          <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {
          row.map((gu, index) => {
            return <tr key={index}>
              <td>{gu.MSRSTE_NM}</td>
              <td>{gu.PM10}</td>
              <td>{gu.O3}</td>
              <td>{gu.IDEX_NM}</td>
              </tr>
          })
          }
        </tbody>
      </table>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
