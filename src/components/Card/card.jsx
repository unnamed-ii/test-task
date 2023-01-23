import React from 'react';
import './style.scss';
import cat from '../../images/product-cat.png'

export const Card = ({title, amount, description, weight, isAvailable}) => {

    return (
        <div className={"card " + (isAvailable && "available")}>
            <div className="card__main">
                <div className="card__main-subtitle">
                    Котэ не одобряет?
                </div>
                <div className="card__main-title">
                    Нямушка
                    <div className="card__main-title__filling">
                        с {title}
                    </div>
                </div>
                <div className="card__main-amount">
                    {amount}
                </div>
                <div className="card__main-weight">
                    {weight} <span>КГ</span>
                </div>
                <img src={cat} alt="Image"/>
            </div>
            <div className="card__description">
                {description}
            </div>
        </div>
    );
};