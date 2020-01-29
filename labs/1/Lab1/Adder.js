class Adder {
    constructor(a, b, _button){
        this.button = _button;
        this.props.a = a;
        this.props.b = b;
        this.props.sum;
        //this.button.addEventListener("click", this.onClick)
    }
    sum() {
        this.props.sum = this.props.a + this.props.b;
        return (this.props.sum);
    } 
    onclick(){
        this.sum();
        this.render();
    }
    render(){
        return '<p> The sum of '+this.props.a+' and '+this.props.b+' is '+this.props.sum+'</p>';
    }
}
module.exports = Adder;
