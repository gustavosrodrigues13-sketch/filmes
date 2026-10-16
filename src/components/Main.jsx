import React from "react";

const Main = () => {
    return (
        <div className="main">
            <div className="col col1">
                <h2>Seus Filmes</h2>
                <p>Aqui, você pode escolher o filme que deseja assistir.<br />
                    Caso queira escolher mais, clique no botão.
                </p>
                <button type="button">Mais</button>
            </div>
            <div className="col cards">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
        </div>
    );
}

export default Main;
