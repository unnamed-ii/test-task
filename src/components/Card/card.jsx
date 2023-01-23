import React, {useState} from 'react';
import './style.scss';
import cat from '../../images/product-cat.png'

export const Card = ({title, amount, description, weight, isAvailable}) => {
    const [isSelected, setIsSelected] = useState(false);
    const toggleSelectingProduct = () => {
        if (isAvailable) setIsSelected(!isSelected)
    }

    return (
        <div className={"card__wrapper " + (isAvailable && "available ") + (isSelected && "selected")}>
            <div className="card">
                <div className="card__main" onClick={toggleSelectingProduct}>
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
                        {weight}
                    </div>
                    <img src={cat} alt="Image"/>
                </div>
            </div>
            {isAvailable
                ? <div className="link">
                    {isSelected
                        ? description
                        : <div>Чего сидишь? Порадуй котэ, <span onClick={toggleSelectingProduct}>купи.</span></div>
                    }
                </div>
                : <div className="link">
                    Печалька, с {title} закончился.
                </div>
            }
        </div>
    );
};