function moneyBox(){
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(2)
myMoneyBox(1)

const moneyBoxAnna = moneyBox()
moneyBoxAnna(10)
moneyBoxAnna(20)
moneyBoxAnna(3)