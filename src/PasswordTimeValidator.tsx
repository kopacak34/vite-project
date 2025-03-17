import React from "react";

interface PasswordTimeValidatorProps {
    timestamp: number;
}

const PasswordTimeValidator: React.FC<PasswordTimeValidatorProps> = ({ timestamp }) => {
    const validateTimeWindow = (timestamp: number) => {
        const timeLimit = 10000; // 10 sekund
        const currentTime = Date.now();
        const timeDiff = currentTime - timestamp;

        return {
            isValid: timeDiff <= timeLimit,
            timeTaken: timeDiff,
        };
    };

    const { isValid, timeTaken } = validateTimeWindow(timestamp);

    return (
        <div>
            <p>Časová validace: {isValid ? "Splněno" : "Nesplněno"}</p>
            <p>Čas, který uplynul od zadání hesla: {timeTaken / 1000} sekund</p>
        </div>
    );
};

export default PasswordTimeValidator;
