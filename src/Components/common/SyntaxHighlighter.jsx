import PropTypes from "prop-types";
import { Fragment } from "react";
const SyntaxHighlighter = ({ code, className, countLine = false }) => {
  const highlightCode = (code) => {
    // Regex per trovare keyword, dichiarazioni di variabili, stringhe, commenti e nuove linee (\n)
    const regex =
      /(\b(const|let|var)\b\s+(\w+))|(['"])(?:(?!\4)[^\\]|\\.)*\4|:\s*(['"])(?:(?!\5)[^\\]|\\.)*\5|\/\*[\s\S]*?\*\/|\/\/.*|\n|\b(\w+)\b(?=:)/g;
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

      if (!matchedText.startsWith("/*") && !elements.length && countLine) {
        elements.push(<span key={`${performance.now()}-start-line`}></span>);
      }

      // Determina quale gruppo abbiamo matchato
      if (match[1]) {
        // keyword con dicharazione di una variabile
        // Aggiungiamo la keyword
        elements.push(
          <code
            key={`${lastIndex}-${performance.now()}-keyword`}
            className="keyword"
          >
            {match[2]}
          </code>
        );
        // Aggiungiamo uno spazio
        elements.push(" ");
        // Aggiungiamo il nome della variabile
        elements.push(
          <code
            key={`${lastIndex}-${match.index}-${match[3]}-variableName`}
            className="variable-name"
          >
            {match[3]}
          </code>
        );
      } else if (match[4] || match[6]) {
        // logica per le stringhe e object-key
        elements.push(
          <code
            key={`${lastIndex}-${performance.now()}-string-key`}
            className={match[6] ? "object-key" : "string select-text"}
          >
            {matchedText}
          </code>
        );
      } else if (match[0].startsWith(":")) {
        // logica per object-value
        elements.push(
          <code key={`${lastIndex}-${performance.now()}-object-value`}>
            :<code className="object-value">{matchedText.substring(1)}</code>
          </code>
        );
      } else if (matchedText.startsWith("/*")) {
        // Commenti multi riga
        const commentContent = matchedText.slice(2, -2); // rimuove l'inizio e la fine di un commento (/* e */)
        const commentLines = commentContent.split("\n");

        // Aggiunge l'inizio di un commento e va a capo
        elements.push(
          <span
            key={`${lastIndex}-${performance.now()}-start`}
            className="comment"
          >
            {"/*"}
          </span>
        );
        elements.push(
          <br key={`${lastIndex}-${performance.now()}-start-br`} />
        );

        // mostra ciascuna riga del commento
        commentLines.forEach((line, index) => {
          elements.push(
            <span
              key={`${lastIndex}-${index}-${line
                .trim()
                .substring(0, 10)}-comment`}
              className="comment"
            >
              &nbsp;{`* ${line}`}
            </span>
          );
          // va a capo includendo l'ultima riga cosi che ci sia una nuova riga anche per la chiusura del commento (*/)
          if (index < commentLines.length) {
            elements.push(
              <br key={`${lastIndex}-${index}-${performance.now()}-br`} />
            );
          }
        });

        elements.push(
          <span
            key={`${lastIndex}-${performance.now()}-end`}
            className="comment"
          >
            &nbsp;{"*/"}
          </span>
        );
      } else if (matchedText === "\n") {
        // Nuova linbea
        elements.push(
          <Fragment key={`${lastIndex}-${performance.now()}-new-line`}>
            <br />
            <span />
          </Fragment>
        );
      } else {
        // Commenti o qualunque altra cosa non catturata
        elements.push(
          <span
            key={`${lastIndex}-${performance.now()}-other`}
            className="comment"
          >
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
      <p
        className={`m-0 p-0 ${
          countLine
            ? "[counter-reset:line] [&>span]:[counter-increment:line] [&>span]:before:content-[counter(line)] [&>span]:before:inline-block md:[&>span]:before:pe-10 [&>span]:before:hidden [&>span]:before:md:inline-block md:[&>span]:before:w-16 [&>span]:before:text-end [&>span]:w-full"
            : null
        } ${className}`}
      >
        {highlightCode(code)}
      </p>
    </div>
  );
};

SyntaxHighlighter.propTypes = {
  code: PropTypes.string,
  className: PropTypes.string,
  countLine: PropTypes.bool
};

export default SyntaxHighlighter;
