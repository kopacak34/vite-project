import React, { useState, useEffect } from "react";

interface CountryFlagValidatorProps {
    password: string;
}

const CountryFlagValidator: React.FC<CountryFlagValidatorProps> = ({ password }) => {
    const countries = [
        "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ",
        "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS",
        "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN",
        "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE",
        "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF",
        "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM",
        "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM",
        "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC",
        "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK",
        "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA",
        "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG",
        "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW",
        "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS",
        "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO",
        "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI",
        "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"

    ];

    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [flagUrl, setFlagUrl] = useState<string>("");
    const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);


    useEffect(() => {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        setSelectedCountry(randomCountry);
    }, []);


    useEffect(() => {
        if (selectedCountry) {
            const fetchFlag = async () => {
                const response = await fetch(`https://flagcdn.com/w320/${selectedCountry.toLowerCase()}.png`);
                setFlagUrl(response.url);
            };

            fetchFlag();
        }
    }, [selectedCountry]);


    useEffect(() => {
        if (password.toLowerCase().includes(selectedCountry.toLowerCase())) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    }, [password, selectedCountry]);

    return (
        <div>
            <p>Heslo musí obsahovat zkratku státu: <strong>{selectedCountry}</strong></p>
            {flagUrl && <img src={flagUrl} alt={`Flag of ${selectedCountry}`} style={{ width: 100, height: 60 }} />}
            <div>
                {isPasswordValid === null ? (
                    <p>Načítám validaci hesla...</p>
                ) : isPasswordValid ? (
                    <p style={{ color: "green" }}>Zkratka země je správně!</p>
                ) : (
                    <p style={{ color: "red" }}>Heslo neobsahuje zkratku země: {selectedCountry}</p>
                )}
            </div>
        </div>
    );
};

export default CountryFlagValidator;

