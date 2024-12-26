import { useState, useEffect } from "react";

export const RandomLetterChangeAnimation = ({
    originalText,
    finalText,
    speed = 100, // Intervalo de mudança de caracteres em ms
    duration = 1000, // Duração total da animação em ms
}: { originalText: string; finalText: string; speed?: number; duration?: number }) => {
    const [current, setCurrent] = useState(originalText);
    const [elapsed, setElapsed] = useState(0);

    // Conjunto de caracteres possíveis para a animação aleatória
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsed((prev) => prev + speed);

            // Calcula o progresso percentual
            const progress = Math.min(elapsed / duration, 1);

            // Define o texto intermediário baseado no progresso
            let newText = "";
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() > progress) {
                    // Gera um caractere aleatório do conjunto
                    const randomChar = characters[Math.floor(Math.random() * characters.length)];
                    newText += randomChar;
                } else {
                    // Usa a letra da palavra final (gradualmente se aproxima de `finalText`)
                    newText += finalText[i];
                }
            }

            // Atualiza o texto atual
            setCurrent(newText);

            // Para a animação quando o tempo termina
            if (progress >= 1) {
                clearInterval(interval);
                setCurrent(finalText);
            }
        }, speed);

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(interval);
    }, [elapsed, originalText, finalText, speed, duration]);

    return <span>{current}</span>;
};
