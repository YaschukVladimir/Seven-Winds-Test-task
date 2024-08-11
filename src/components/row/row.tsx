import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import "./row.scss";

export function Row(): React.JSX.Element {
    return (
        <li className="main__list-item">
            <TextSnippetIcon />
            <p className="main__list-text"> Южная строительная площадка</p>
            <p className="main__list-text">20 348</p>
            <p className="main__list-text">1750</p>
            <p className="main__list-text">108,07</p>
            <p className="main__list-text">1 209 122,5</p>
        </li>
    )
}