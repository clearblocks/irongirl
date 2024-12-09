import React from "react";
import {renderPrice} from "../atoms/PriceRow";
import classNames from "classnames";

type CalculatorItemProps = {
    id: string,
    name: string,
    price: number,
    amount: number | undefined,
    setAmount: (id: string, amount: number | undefined) => void
}

export function CalculatorItem({id, name, price, amount, setAmount}: CalculatorItemProps) {
    function up() {
        setAmount(id, (amount || 0) + 1)
    }

    function down() {
        setAmount(id, Math.max((amount || 0) - 1, 0))
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(id, Number(e.target.value))
    }

    function onInputFocus(e: React.ChangeEvent<HTMLInputElement>) {
        e.target.select()
    }

    function showAmount(amount: number | null | undefined) {
        if (!amount) {
            return '0'
        }

        return amount
    }

    return <div className={classNames("calculator-item ", {'active': (amount || 0) > 0})}>
        <span className={'item-name'}>{name}</span>
        <div className={"calc-button calc-button-min"} onClick={down}>-</div>
        <div className={"calc-button calc-button-plus"} onClick={up}>+</div>
        <input type={'text'} value={showAmount(amount)} onFocus={onInputFocus} onChange={onInputChange} className={'item-amount'} />
        <span className={'item-total'}><span className={'item-euro'}>&euro;</span>{renderPrice((amount || 0) * price)}</span>
    </div>
}