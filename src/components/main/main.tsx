
import CollapsibleTable from "../table/table";
import "./main.scss";

function Main(): React.JSX.Element {
    return (
        <section className="main">
            {/* <div className="main__title">Строительно-монтажные работы</div>
            <div className="main__data">
                <div className="main__data-title">
                    <div className="main__data-text">Уровень</div>
                    <div className="main__data-text">Наименование работ</div>
                    <div className="main__data-text">Основная з/п</div>
                    <div className="main__data-text">Оборудование</div>
                    <div className="main__data-text">Накладные расходы</div>
                    <div className="main__data-text">Сметная прибыль</div>
                </div>
                <ul className="main__data-list">
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                </ul>
            </div> */}
            <CollapsibleTable />
        </section>
    )
}

export default Main;
