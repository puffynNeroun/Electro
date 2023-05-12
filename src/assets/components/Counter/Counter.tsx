import React, {useEffect, useState} from "react";


type Count = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const Counter: React.FC = () => {
    const [count, setCount] = useState<Count>({
        days: 2,
        hours: 0,
        minutes: 30,
        seconds: 50,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const { days, hours, minutes, seconds } = count;

            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(interval);
            } else if (hours === 0 && minutes === 0 && seconds === 0) {
                setCount({ days: days - 1, hours: 23, minutes: 59, seconds: 59 });
            } else if (minutes === 0 && seconds === 0) {
                setCount({ days, hours: hours - 1, minutes: 59, seconds: 59 });
            } else if (seconds === 0) {
                setCount({ days, hours, minutes: minutes - 1, seconds: 59 });
            } else {
                setCount({ days, hours, minutes, seconds: seconds - 1 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    const { days, hours, minutes, seconds } = count;


    
    return (
        <ul className="hot-deal-countdown">
            <li>
                <div>
                    <h3>{days}</h3>
                    <span>Днів</span>
                </div>
            </li>
            <li>
                <div>
                    <h3>{hours}</h3>
                    <span>Години</span>
                </div>
            </li>
            <li>
                <div>
                    <h3>{minutes}</h3>
                    <span>Хв</span>
                </div>
            </li>
            <li>
                <div>
                    <h3>{seconds}</h3>
                    <span>Сек</span>
                </div>
            </li>
        </ul>
    );
};

export default Counter;