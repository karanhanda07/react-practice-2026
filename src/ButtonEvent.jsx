function ButtonEvent() {

    const handleClick = () => {
        console.log('Ouch!!!!');
    }
    const handleClick2 = (name) => {
        console.log(`Stop clicking me ${name}`);
    }
    const handleClick3 = (name) => {
        console.log(`Bro!! Stop clicking me ${name}`);
    }

    return (<div>
        <button onClick={handleClick}>Click Me!!! </button> <br />
        {/* <button onClick={handleClick2('Karan')}>Click Me too </button> //problem w this: it invokes or calls right away */}
        <button onClick={() => handleClick3('Karan')}>Click Me three </button>
    </div>)
}

export default ButtonEvent