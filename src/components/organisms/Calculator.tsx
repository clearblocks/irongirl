import React, {useState} from 'react'

import ironPriceData from "../../assets/json/ironPriceData.json"
import {CalculatorItem} from "../molecules/CalculatorItem";
import classNames from "classnames";
import {AmountMap, getTotalPrice} from "../../helpers/calculator-helper";
import {LaundryCalculatorItem} from "../molecules/LaundryCalculatorItem";
import {saveInvoice} from "../../helpers/requests";
import {Price} from "../atoms/Price";
import {useNavigate} from "react-router";

export function Calculator() {

    const [itemAmounts, setItemAmounts] = useState<AmountMap>({})
    const [viewSelected, setViewSelected] = useState<boolean>(false)
    const [viewSave, setViewSave] = useState<boolean>(false)
    const [saveError, setSaveError] = useState<string | null>(null)

    let navigate = useNavigate();

    function setAmount(id: string, amount: number | undefined) {
        const updated = {
            ...itemAmounts,
            [id]: amount,
        }
        setItemAmounts(updated)
    }

    function showCategory(category: string): boolean {
        if (!viewSelected) {
            return true
        }
        if (category === 'laundry') {
            return (itemAmounts['laundry'] || 0) > 0
        }
        const categoryIndex = ironPriceData.findIndex(catItems => catItems.category === category)
        return ironPriceData[categoryIndex]['priceDataSet'].some((priceData, itemIndex) => {
            const id = `${categoryIndex}-${itemIndex}`
            const itemAmount = itemAmounts[id] || 0
            return itemAmount > 0
        })
    }

    async function doSaveInvoice() {
        setSaveError(null)
        try {
            const result = await saveInvoice(itemAmounts)
            navigate(`/admin/invoice/${result.invoiceNumber}`)
        } catch (e) {
            console.error(e)
            setSaveError("Fout bij opslaan")
        }
    }

    const totalPrice = getTotalPrice(itemAmounts)

    return <div className="calculator">
        <h1>Calculator</h1>
        <div className={'action-buttons'}>
            {!viewSave && <div className={'toggle-selected'}
                               onClick={() => setViewSelected(!viewSelected)}>{viewSelected ? 'Toon alles' : 'Toon gekozen'}</div>}
            {totalPrice > 0 && <div className={classNames("toggle-save ", {'cancel': viewSave})}
                                    onClick={() => {
                                        setViewSave(!viewSave)
                                        setViewSelected(true)
                                    }}>{viewSave ? 'Annuleer' : 'Factuur maken'}</div>}
        </div>
        <div className={"calculator-total"}>
            <span>Totaal:&nbsp;</span>
            <Price price={totalPrice} />
        </div>
        {ironPriceData.map((priceDataSet, i: number) =>
            <div key={i}>
                {showCategory(priceDataSet.category) ? <h2>{priceDataSet.category}</h2> : null}
                {priceDataSet.priceDataSet.map((priceItem, j: number) => {
                    const id = `${i}-${j}`
                    const itemAmount = itemAmounts[id]
                    const viewItem = !viewSelected || itemAmount
                    return viewItem ? <CalculatorItem key={j} id={id}
                                                      name={priceItem.name}
                                                      price={priceItem.price}
                                                      amount={itemAmounts[id]}
                                                      setAmount={setAmount}
                                                      readOnly={viewSave}/> : null
                })}
            </div>)}
        <div key={'laundry'}>
            {showCategory('laundry') ? <h2>Was Service</h2> : null}
            {(!viewSelected || itemAmounts['laundry']) ? <LaundryCalculatorItem id={'laundry'}
                                    name={'Wasgoed (Kg)'}
                                    price={0}
                                    amount={itemAmounts['laundry']}
                                    setAmount={setAmount}
                                    readOnly={viewSave}/> : null}
        </div>
        <div className={"calculator-total-bottom"}>
            <span>Totaal:</span>
            <Price price={totalPrice} />
        </div>
        {viewSave && <div className={'action-buttons-bottom'}>
            <div className={'save-button'} onClick={doSaveInvoice}>Opslaan</div>
        </div>}
        {saveError && <div className={'save-error'}>{saveError}</div>}
    </div>
}