/**
 * React component
 * Gifted base class
 * 
 * @class 00_base/gifted/Gifted
 */
class Gifted extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer />
            </div>
        );
    }
}


// class App extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             posts: []
//         };
//     }

//     componentDidMount() {
//         this.serverRequest = APP.ajax.getJSON('http://localhost:3003/gifs.json', function (response) {
//             this.setState({
//                 posts: JSON.parse(response)
//             });
//         }.bind(this));
//     }

//     componentWillUnmount() {
//         this.serverRequest.abort();
//     }

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <main className="o-content">
//                     <Posts posts={this.state.posts} />
//                     <Sidebar />
//                 </main>
//             </div>
//         );
//     }
// }
