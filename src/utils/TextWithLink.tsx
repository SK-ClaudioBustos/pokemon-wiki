
interface Props {
    text: string
    link: string
    textLink: string
    ariaLabel: string
}

export const TextWithLink = ({ text, link, textLink, ariaLabel }: Props) => {
    return (
        <span style={{ color: "#fff" }}>
            {`${text} `}
            <a
                href={`${link}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ariaLabel}`}
            >
                {`${textLink}`}
            </a>
        </span>
    );
}