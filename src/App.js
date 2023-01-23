import React from 'react';
import {ProductsData} from "./constants";
import {Card} from "./components/Card/card";

function App() {
    return (
        <div className="app">
            <div className="app__inner">
                <h1 className="app__inner-title">
                    Ты сегодня покормил кота?
                </h1>
                <div className="app__inner-list">
                    {ProductsData.map(product => (
                        <Card
                            key={Math.floor(Math.random()*10000)}
                            title={product.title}
                            amount={product.amount}
                            description={product.description}
                            weight={product.weight}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
