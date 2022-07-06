import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from "axios";

const Movie = () => {
  const [moviename, setMoviename] = useState(null);
  const [data, updateData] = useState([]);

  function Movie() {
    // useEffect(() => {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=4a607f803306a77f7ca9ee8f884befe4&language=en-US&query=" +
            moviename
        )
        .then((response) => {
          console.log(response.data.results);
          updateData(response.data.results);
        });
    // }, [data]);
    alert("write full code to fetch the detail");
    // setMoviename(e.target.value)
  }
  return (
    <div>
      <div className="div1">
        <h1>Search Your Movie Here</h1>
        <br></br>
        <input
          type="text"
          placeholder="Enter Movie Name"
          onChange={(e) => setMoviename(e.target.value)}
        ></input>
      </div>
      <div className="div2">
        <button onClick={Movie}>SEARCH</button>

        {/* <h4>{moviename}</h4> */}
      </div>

      <div >
        <table border="3px">
          <thead>
            <tr>
              <th>ID</th>
              <th>RELEASE DATE</th>
              <th>ORIGINAL TITLE</th>
              <th>IMAGE</th>
              <th>OVERVIEW</th>
            </tr>
          </thead>
          {data &&
            data.map((resp,i) => (
              <tbody key={i}>
                <tr>
                  <td className="td1">{++i}</td>
                  <td className="td2">{resp.release_date}</td>
                  <td className="td3">{resp.original_title}</td>
                  <td className="td4">{resp.poster_path}</td>
                  <td className="td5">{resp.overview}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Movie;
