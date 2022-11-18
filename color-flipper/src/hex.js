const Hex = function() {

    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    const start = () => {
        const btn = document.getElementById("btn")
        const label = document.querySelector(".color")

        btn.addEventListener("click", () => {
            const randomHexColor = getHexColor();

            document.body.style.backgroundColor = randomHexColor
            label.textContent = randomHexColor
        })

    }

    const getHexColor = () => {    
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hexArr[getRandomNumber()]
        }

        return hexColor
    }
    
    const getRandomNumber = () => {
        return Math.floor(Math.random() * hexArr.length);
    }

    return {
        init: () => {
	        start()
        }
    }
}()

Hex.init()