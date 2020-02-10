class Adder {
    constructor(props){
        this.props = props;
        this.sum;
    }
    sum() {
        this.sum = this.props.a + this.props.b;
        if (this.props.a== undefined || this.props.b == undefined){
            this.sum = null;
        }
        
        return (this.sum);

    } 

    render(){
        this.sum();
        return `<p> The sum of ${this.props.a} and ${this.props.b} is ${this.sum}</p>`;
    }
}
module.exports = Adder;
