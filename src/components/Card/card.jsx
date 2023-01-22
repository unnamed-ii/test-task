import React from 'react';

export const Card = ({title, amount, description, weight, isAvailable}) => {

    return (
        <div className={"card " + (isAvailable && "available")}>
            <div className="card__main">
                <div className="card__main-question">
                    Котэ не одобряет?
                </div>
                <div className="card__main-title">
                    Нямушка с {title}
                </div>
                <div className="card__main-amount">
                    {amount}
                </div>
                <div className="card__main-weight">
                    {weight} КГ
                </div>
            </div>
            <div className="card__description">
                {description}
            </div>
        </div>
    );
};