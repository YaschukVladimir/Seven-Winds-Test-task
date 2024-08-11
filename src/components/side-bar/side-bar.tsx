import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectedListItem from '../side-bar-list-item/side-bar-list-item';
import "./side-bar.scss";

function SideBar():React.JSX.Element {
    return (
        <section className="side-bar">
            <div className="side-bar__select">
                <div className="side-bar__wrapper">
                    <span className="side-bar__text large">Название проекта</span>
                    <span className="side-bar__text small">Аббревиатура</span>
                </div>
                <div className="side-bar__arrow">
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="side-bar__list">
                <SelectedListItem />
            </div>
            
        </section>
    )
}

export default SideBar;