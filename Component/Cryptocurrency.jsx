import { useState } from "react";

const Cryptocurrency = () => {
  const [MyCoin, setCoin] = useState([]);

  const handleInput = (Coin) => {
    console.log(Coin.target.value, "Coin Input");
  };
  const FatchCrypto = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const CoinData = await response.json();
      setCoin(CoinData);
      console.log(CoinData);
      console.log(CoinData, "Coin Data");
    } catch (error) {
      console.log(error, "Fatch the Error");
    }
  };

  return (
    <div className="Card-container">
      <div className="title-container" style={{ textAlign: "center" }}>
        <h1 className="Crypto">Largest</h1>
        <br />
        <h1>Crypto Marketplace</h1>
        <br />
        <div className="title">
          <span>Welcome to the world's cryptocurrency marketplace.</span>
          <br />
        </div>
        <br />
        <div className="input-box">
          <input
            className="input"
            type="search"
            placeholder="Search crypto..."
            onChange={(e) => handleInput(e)}
          />
          <button type="button" className="btns btn-info">
            <span className="searchbar" onClick={FatchCrypto}>
              Fetch Data
            </span>
          </button>
        </div>
      </div>
      <div className="data-container">
        <div className="container text-center">
          <div className="row">
            <div className="col"> CryptoCurrency</div>
            <div className="col">Price</div>
            <div className="col">Market Cap</div>
            <div className="col">Volume</div>
            <div className="col">24h Change</div>
          </div>
        </div>
        {MyCoin.map((coins) => (
          <div className="container text-center" key={coins.id}>
            <div className="row">
              <div className="col">{coins.name}</div>
              <div className="col">{coins.current_price}</div>
              <div className="col">{coins.market_cap}</div>
              <div className="col">{coins.total_volume}</div>
              <div
                className="col"
                style={{
                  color:
                    coins.price_change_percentage_24h >= 0 ? "green" : "red",
                }}
              >
                {coins.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrency;
