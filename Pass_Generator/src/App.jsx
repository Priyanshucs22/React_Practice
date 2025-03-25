import { useState, useCallback, useRef, useEffect } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [numberAllowed, charAllowed, length, passwordGenerator]);

    return (
        <div className="w-full max-w-xl mx-auto shadow-lg rounded-xl px-6 py-5 my-10 bg-pink-200 text-red-700">
            <h1 className="text-red-700 text-center text-2xl font-semibold mb-5">
                Password Generator
            </h1>
            <div className="flex shadow-md rounded-lg overflow-hidden mb-5 border border-red-300">
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-2 px-4 text-lg bg-white text-gray-800"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />
                <button
                    onClick={copyPasswordToClipboard}
                    className="outline-none bg-orange-700 hover:bg-orange-800 transition text-white px-4 py-2 font-medium"
                >
                    Copy
                </button>
            </div>
            <div className="flex text-sm gap-x-4 flex-wrap">
                <div className="flex items-center gap-x-2">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className="cursor-pointer accent-red-600"
                        onChange={(e) => {
                            setLength(e.target.value);
                        }}
                    />
                    <label className="font-medium">Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        className="w-4 h-4 accent-red-600"
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numberInput" className="font-medium">
                        Numbers
                    </label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="characterInput"
                        className="w-4 h-4 accent-red-600"
                        onChange={() => {
                            setCharAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="characterInput" className="font-medium">
                        Characters
                    </label>
                </div>
            </div>
        </div>
    );
}

export default App;
