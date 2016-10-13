class Sidebar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <aside className="o-sidebar">
                <section className="o-sidebar__section">
                    <h3 className="o-sidebar__title">Advertisement</h3>
                    <img className="o-sidebar__image a-image" src="/assets/fake.jpg" width="500" height="299" />
                </section>

                <section className="o-sidebar__section">
                    <h3 className="o-sidebar__title">Hot on gifted:</h3>
                    <div>
                        <img className="o-sidebar__image a-image" src="/assets/fake.jpg" width="500" height="299" />
                    </div>
                    <h2 className="a-subheading a-subheading--dark"><a>Fake bugfix</a></h2>
                    <div>
                        <img className="o-sidebar__image a-image" src="/assets/cat.jpg" width="1600" height="800" />
                    </div>
                    <h2 className="a-subheading a-subheading--dark"><a>Top 10 binary numbers</a></h2>
                </section>
            </aside>
        );
    }
}