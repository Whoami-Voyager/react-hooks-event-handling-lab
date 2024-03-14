
function Keypad() {
    function clickInput() {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={clickInput}/>
        </div>
    )
}

export default Keypad;