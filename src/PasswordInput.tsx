

import React, { useState } from "react";

interface PasswordInputProps {
    setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Zadejte heslo"
                onChange={handlePasswordChange}
            />
            <button onClick={togglePasswordVisibility}>
                {showPassword ? "Skryt" : "Zobrazit"}
            </button>
        </div>
    );
};

export default PasswordInput;

