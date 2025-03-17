import React from "react";

interface CharacterSequenceValidator {
    password: string;
}

const CharacterSequenceValidator: React.FC<CharacterSequenceValidator> = ({ password }) => {
    const validateSequence = (password: string) => {
        const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
        const matches = password.match(regex);
        return {
            isValid: matches !== null,
            count: matches ? matches.length : 0,
        };
    };

    const { isValid, count } = validateSequence(password);

    return (
        <div>
            <p>Požadavek na sekvenci znaků: {isValid ? "Splněno" : "Nesplněno"}</p>
            <p>Počet nalezených validních sekvencí: {count}</p>
        </div>
    );
};

export default CharacterSequenceValidator;