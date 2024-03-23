import PropTypes from "prop-types";
const SyntaxHighlighter = ({ code, className }) => {
  const highlightCode = (code) => {
    // Regex per trovare keyword, dichiarazioni di variabili, stringhe, commenti e nuove linee (\n)
    const regex =
      /(\b(const|let|var)\b\s+(\w+))|(['"])(?:(?!\4)[^\\]|\\.)*\4|\/\*[\s\S]*?\*\/|\/\/.*|\n/g;
    let match;

    // Array che contiene elementi JSX e stringhe.
    const elements = [];

    // Tiene traccia dell'ultimo indice processato
    let lastIndex = 0;

    // Cerca dei match in un loop
    while ((match = regex.exec(code)) !== null) {
      // Il testo precedente al match (ad esempio, in: 'testo a caso const' 'testo a caso' è il testo precedente al match 'const'.)
      const beforeMatch = code.substring(lastIndex, match.index);
      if (beforeMatch) {
        elements.push(beforeMatch);
      }

      // Il match
      const matchedText = match[0];

      // Determina quale gruppo abbiamo matchato
      if (match[1]) {
        // keyword con dicharazione di una variabile
        // Aggiungiamo la keyword
        elements.push(
          <span key={lastIndex} className="keyword">
            {match[2]}
          </span>
        );
        // Aggiungiamo uno spazio
        elements.push(" ");
        // Aggiungiamo il nome della variabile
        elements.push(
          <span key={lastIndex + match[2].length + 1} className="variable-name">
            {match[3]}
          </span>
        );
      } else if (match[4]) {
        // Stringhe
        elements.push(
          <span key={lastIndex} className="string">
            {matchedText}
          </span>
        );
      } else if (matchedText === "\n") {
        // Nuova linbea
        elements.push(<br key={lastIndex} />);
      } else {
        // Commenti o qualunque altra cosa non catturata
        elements.push(
          <span key={lastIndex} className="comment">
            {matchedText}
          </span>
        );
      }

      // Aggiorna l'indice
      lastIndex = regex.lastIndex;
    }

    // Se dopo l'ultimo match rimane del testo, viene aggiunto così com'è
    // (esempio: "const name = 'Fabio' testo a caso"; 'Fabio' è l'ultimo match, 'testo a caso' è il testo dopo l'ultimo match.)
    if (lastIndex < code.length) {
      elements.push(code.substring(lastIndex));
    }

    return elements;
  };

  return (
    <div className="code">
      <p className={`m-0 p-0 ${className}`}>{highlightCode(code)}</p>
    </div>
  );
};

SyntaxHighlighter.propTypes = {
  code: PropTypes.string,
  className: PropTypes.string,
};

export default SyntaxHighlighter;
