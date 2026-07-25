/*
    This component will do the calculation for
    getting the updated price based off the 
    selected cusomtisation options and it 
    will update in real time.
*/

import styles from './PriceSummary.module.css';

// import types
import type { SizeOption } from '../../types/SizeOption';
import type { MaterialOption } from '../../types/MaterialOption';
import type { FrameOption } from '../../types/FrameOption';

// props
interface PriceSummaryProps {
    basePrice: number;
    selectedSize: SizeOption;
    selectedMaterial: MaterialOption;
    selectedFrame: FrameOption;
}

function PriceSummary({
    basePrice,
    selectedSize,
    selectedMaterial,
    selectedFrame
}: PriceSummaryProps) {

    const totalPrice =
        basePrice +
        selectedSize.priceModifier +
        selectedMaterial.priceModifier +
        selectedFrame.priceModifier;

    return (
        <div className={styles.summary}>
                <h3>Total Price</h3>

                <p className={styles.price}>€{totalPrice}</p>
                
                <button className="btn">
                    PURCHASE
                </button>
            </div>
    );
}

export default PriceSummary;