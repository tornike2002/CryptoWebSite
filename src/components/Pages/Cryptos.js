import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./Cryptos.css";

const Cryptos = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cryptoPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.coincap.io/v2/assets");
        setCryptoData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Calculate index of the last crypto for the current page
  const lastIndex = currentPage * cryptoPerPage;
  // Calculate index of the first crypto for the current page
  const firstIndex = lastIndex - cryptoPerPage;
  // Get the cryptocurrencies for the current page
  const currentCryptos = cryptoData.slice(firstIndex, lastIndex);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="crypto-list_container bgg-c">
      <NavBar />
      <section>
        <div className="crypto-list-background">
          <div className="crypto-list-text d-flex align-items-center container">
            <h1 className="tt-c">Crypto List</h1>
          </div>
        </div>
      </section>
      {/* crypto List */}
      <section className="d-flex justify-content-center align-items-center container">
        <table className="mt-5  mw-100 table-bordered  container table-striped">
          <thead>
            <tr>
              <th className=" text-center">Name</th>
              <th className=" text-center sh">Supply</th>
              <th className=" text-center hh">Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {currentCryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td className="p-3 tt-c text-start">{crypto.name}</td>
                <td className="p-3 pp-c text-center sh">
                  {Math.round(crypto.supply)}
                </td>
                <td className="p-3 hh text-success text-center">
                  {Math.round(crypto.priceUsd)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* Pagination */}
      <section className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(cryptoData.length / cryptoPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    index + 1 === currentPage ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link pp-c"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </section>
      <Footer />
    </div>
  );
};

export default Cryptos;
