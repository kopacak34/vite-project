import React, { useState, useEffect } from "react";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import CharacterSequenceValidator from "./CharacterSequenceValidator";
import PasswordTimeValidator from "./PasswordTimeValidator";
import CountryFlagValidator from "./CountryFlagValidator";
import './App.css';


const App: React.FC = () => {
    const [password, setPassword] = useState<string>("");
    const [timestamp, setTimestamp] = useState<number>(0);
    const [passwordStrength, setPasswordStrength] = useState<string>("");

    useEffect(() => {

        if (password.length > 0 && timestamp === 0) {
            setTimestamp(Date.now());
        }


        const strength = evaluatePasswordStrength(password);
        setPasswordStrength(strength);
    }, [password, timestamp]);


    useEffect(() => {
        document.title = `Síla hesla: ${passwordStrength}`;
    }, [passwordStrength]);

    const evaluatePasswordStrength = (password: string): string => {
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[!@#$%^&*_]/.test(password)) strength++;

        if (strength === 4) return "Silné";
        if (strength === 3) return "Střední";
        if (strength === 2) return "Slabé";
        return "Velmi slabé";
    };

    return (
        <div className="App">
            <h1>Hodnocení síly hesla</h1>
            <PasswordInput setPassword={setPassword} />
            <PasswordStrength password={password} />
            <CharacterSequenceValidator password={password} />
            <PasswordTimeValidator timestamp={timestamp} />
            <CountryFlagValidator password={password} />
        </div>
    );
};

export default App;