function calc() {
    const n1 = Number(document.querySelector('#n1').value)
    const n2 = Number(document.querySelector('#n2').value)
    const body = document.querySelector('body')

    let n
    let nums = []
    let primos = []


    if (n1 < n2) {
        for (let i = 1; i < n2 - 1; i++) {
            n = n1 + i
            nums.push(meio)

        }
    } else {
        for (let i = 1; i < n1 - 1; i++) {
            n = n1 - i
            nums.push(n)
        }
    }

    nums.map((num) => {
        let d = 0
        for (let count = 1; count <= num; count++) {
                    if (num % count == 0) {
                d++;
                        }
                }

        if (d == 2) {
            console.log(`${num} é primo`)
            primos.push(num)
        } else
            console.log(`${num} não é primo`)

    })

    body.innerHTML = `Os números primos dentre o intervalo são : ${primos}`



}