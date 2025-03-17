import React, { useState, useEffect } from "react";

const PasswordGame: React.FC = () => {
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword((prevPassword) => {
                const action = Math.random() < 0.5 ? "add" : "remove";
                if (action === "add") {
                    return prevPassword + "😜";
                } else {
                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });
        }, 10000);

        
        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <div>
            <h1>Heslo je: {password}</h1>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Zadejte heslo"
            />
        </div>
    );
};

export default PasswordGame;
