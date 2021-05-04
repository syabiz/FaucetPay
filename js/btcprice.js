    (function updatePrice() {
      document.getElementById("btc_price").innerHTML = getBTCPriceUSD() + " USD";
      setTimeout(updatePrice, 60000);
    })();

    function getBTCPriceUSD() {
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", false);
      httpRequest.send(null);
      btcJSONText = httpRequest.responseText;
      btcJSONObject = JSON.parse(btcJSONText);
      rawBtcPriceUSD = btcJSONObject.bpi.USD.rate_float;
      return rawBtcPriceUSD.toFixed(2);
    }