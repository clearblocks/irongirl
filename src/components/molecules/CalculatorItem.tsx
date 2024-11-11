import React from "react";
import {renderPrice} from "../atoms/PriceRow";

type CalculatorItemProps = {
    id: string,
    name: string,
    price: number,
    amount: number,
    setAmount: (id: string, amount: number) => void
}

export function CalculatorItem({id, name, price, amount, setAmount}: CalculatorItemProps) {

    function up() {
        setAmount(id, amount + 1)
    }

    function down() {
        setAmount(id, Math.max(amount - 1, 0))
    }

    return <div className={"calculator-item"}>
        <span className={'item-name'}>{name}</span>
        <div className={"calc-button calc-button-min"} onClick={down}>-</div>
        <div className={"calc-button calc-button-plus"} onClick={up}>+</div>
        <span className={'item-amount'}>{amount}</span>
        <span className={'item-total'}><span className={'item-euro'}>&euro;</span>{renderPrice(amount * price)}</span>
    </div>
}