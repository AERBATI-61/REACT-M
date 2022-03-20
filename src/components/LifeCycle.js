import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:10
        }
        console.log("constructor: Componentin olusturuldugu zaman calismaya baslayacaktir.")
    }

    componentDidMount() {
        console.log("componentDidMount: api isteklerini gerceklestirmek icin, Component hemen mount edildikten sonra calisiyor.")
        // api isteklerini gerceklestirecez
        this.setState({
            a:20
        })
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: props'lerimizde veya state'lerimizde degisiklik olduysa onceki degismeyen halini getiriyor.")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate: render edilmesini istemedigimiz durmlari kontrol edebiliriz.")
        return false
    }


    /*componentWillUnmount() {
        console.log("componentWillUnmount: componentleri kaldirmadan belli abonelikleri iptal edebiliriz. veya kaynaklari serbest birakabiliriz.")
    }*/




    render() {

        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycle;