import React from "react";
import classNames from "classnames";
import {Price} from "../atoms/Price";
import { useLanguage } from "../../contexts/LanguageContext";

export type CalculatorItemProps = {
    id: string,
    name: string,
    price: number,
    amount: number | undefined,
    setAmount: (id: string, amount: number | undefined) => void,
    readOnly: boolean,
    calculatePrice?: (amount: number | undefined, price: number) => number
    translateName?: boolean
}

function calcIroningPrice(amount: number | undefined, price: number): number {
    return (amount || 0) * price
}

export function CalculatorItem({id, name, price, amount, setAmount, readOnly, calculatePrice = calcIroningPrice, translateName = true}: CalculatorItemProps) {
    const {translate} = useLanguage();

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
        <span className={'item-name'}>{translateName ? translate(`items.${name}`): name}</span>
        {!readOnly && <div className={"calc-button calc-button-min"} onClick={down}>-</div>}
        {!readOnly && <div className={"calc-button calc-button-plus"} onClick={up}>+</div>}
        {readOnly ? <span className={'read-item-amount'}>{showAmount(amount)}:</span> :
        <input type={'text'} value={showAmount(amount)} onFocus={onInputFocus} onChange={onInputChange} className={'item-amount'} />}
        <Price className={'item-total'} price={calculatePrice(amount, price)} />
    </div>
}