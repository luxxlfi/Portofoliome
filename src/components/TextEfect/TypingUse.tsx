import { useEffect, useState } from "react";

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

function TextType({
  text,
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = text[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(current.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % text.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    text,
    textIndex,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span>
      {displayText}
      {showCursor && cursorCharacter}
    </span>
  );
}

export default function TextTypingEf() {
  return (
    <div>
      <TextType
        text={[
          "Abyan Luthfi",
        ]}
        typingSpeed={75}
        deletingSpeed={50}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
      />
    </div>
  );
}