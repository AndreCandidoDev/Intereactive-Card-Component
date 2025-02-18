import styles from "./styles.module.css"
import { useEffect, useState } from "react"

export const RatingButton = ({ 
    valueRating, 
    setRatingValue,
    setActiveRating,
    activeRating 
}) =>
{
    const [selected, setSelected] = useState(false)

    useEffect(() => { activeRating[valueRating] ? setSelected(true) : setSelected(false) }, [activeRating, valueRating])

    const handleRatingValue = () =>
    {
        setSelected(true)
        setRatingValue(valueRating + 1)

        const newActive = new Array(5).fill(false)
        newActive[valueRating] = true
        setActiveRating(newActive)
    }

    const inputClassName = () =>
    {
        if(selected)
        {
            return styles.circleCompActive
        }

        return styles.circleCompInput
    }

    return (
        <div className={styles.circleComp}>
            <input 
                type='button' 
                value={valueRating + 1}
                className={inputClassName()}
                onClick={() => {handleRatingValue()}}
            />
        </div>
    )
}