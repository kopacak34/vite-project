import React from "react";

interface PasswordStrengthProps {
    password: string;  // Očekáváme prop 'password', ne 'passwordStrength'
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
    const evaluatePasswordStrength = (password: string) => {
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[!@#$%^&*_]/.test(password)) strength++;

        return strength;
    };

    const getStrengthLabel = (strength: number) => {
        switch (strength) {
            case 4:
                return "Silné";
            case 3:
                return "Střední";
            case 2:
                return "Slabé";
            default:
                return "Velmi slabé";
        }
    };

    const strength = evaluatePasswordStrength(password);
    const strengthLabel = getStrengthLabel(strength);

    const strengthColor =
        strength === 4 ? "green" : strength === 3 ? "yellow" : "red";

    return (
        <div>
            <div
                style={{
                    height: "10px",
                    width: "100%",
                    backgroundColor: strengthColor,
                }}
            ></div>
            <p>{strengthLabel}</p>
            <ul>
                <li style={{ color: password.length >= 8 ? "green" : "red" }}>
                    Minimálně 8 znaků
                </li>
                <li style={{ color: /[A-Z]/.test(password) ? "green" : "red" }}>
                    Alespoň jedno velké písmeno
                </li>
                <li style={{ color: /\d/.test(password) ? "green" : "red" }}>
                    Alespoň jedno číslo
                </li>
                <li style={{ color: /[!@#$%^&*]/.test(password) ? "green" : "red" }}>
                    Alespoň jeden speciální znak
                </li>
            </ul>
        </div>
    );
};

export default PasswordStrength;
