import { useState } from "react";
import { MdClose } from "react-icons/md";
import Calculator from "./Calculator";

function CalEarn() {
    const [selectedCalEarn, setSelectedCalEarn] = useState(null);

    const handleCalEarnClick = (name) => {
        setSelectedCalEarn(name);
    };

    const handleClosePreview = () => {
        setSelectedCalEarn(null);
    };

    return (
        <div className="container">
            <div className="calEarns-container">
                <button
                    className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95"
                    onClick={() => handleCalEarnClick("p-1")}
                >
                    Calculator Checks
                </button>
            </div>

            <div
                className="calEarns-preview z-[9999]"
                style={{ display: selectedCalEarn ? "flex" : "none" }}
            >
                <div className={`preview ${selectedCalEarn === "p-1" ? "active" : ""}`}>
                    <MdClose className="close-icon" onClick={handleClosePreview} />
                    <Calculator />
                </div>
            </div>
        </div>
    );
}

export default CalEarn;
