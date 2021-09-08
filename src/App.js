import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import CardList from "./components/CardList";

import {connect} from 'react-redux'
import {flipCard} from "./store/action"
import {restart} from "./store/action"

function App(props) {

    const { memory, flipCard, restart } = props;

    return (
        <div>
            <Header round={memory.round} restart={restart}/>
            <CardList cards={memory.cards} flipCard={flipCard} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    memory: state.memory
});



export default connect(mapStateToProps, {flipCard, restart})(App);
