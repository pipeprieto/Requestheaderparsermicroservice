import React, { Component } from "react";

export class ParseHeader extends Component {
  static displayName = ParseHeader.name;

   render() {
    return (
      <section className="d-flex flex-column">
        <div>
          <h1 className="text-center">
            API Project: Request Header Parser Microservice
          </h1>
        </div>
        <div>
          <h2 className="text-center">Example Usage:</h2>
        </div>
        <div>
          <p className="text-center">
            <a href="https://localhost:7080/api/whoami">
              &#123;baseurl&#125;/api/whoami
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-center">Example Output:</h2>
        </div>
        <div>
          <p className="text-center">
            &#123;"ipaddress": "190.84.119.163", "language":
            "es-US,es-419;q=0.9,es;q=0.8,en;q=0.7", "software": "Mozilla/5.0
            (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
            Chrome/115.0.0.0 Safari/537.36"&#125;
          </p>
        </div>
        <div>
          <p className="text-center">
            by: <a href="https://andresprieto.com.co">Andres Prieto</a>
          </p>
        </div>
      </section>
    );
  }
}

export default ParseHeader;
