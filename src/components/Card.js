class Card extends react.component {
  constructor(props){
    super(props);
    this.state = {cardFront:'', cardBack:''}
  }

  componentDidMount() {
    this.setState(({cardFront: 'i am the front', cardBack: 'i am the back'}));
  }

  render(){
    return <div>this.state.cardFront</div><div>this.state.cardBack</div>
  }
}