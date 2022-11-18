const App = function() {

    const colors = ['red', 'green', 'blue', '#ccc', '#f1f5f8']

    const start = () => {
        const btn = document.getElementById("btn")
        const btnStartAutomate = document.getElementById("btn-start-automate")
        const btnStopAutomate = document.getElementById("btn-stop-automate")
        const label = document.querySelector(".color")
        let interval = null;

        btn.addEventListener("click", () => {
            const randomNumber = getColor();

            document.body.style.backgroundColor = colors[randomNumber]
            label.textContent = colors[randomNumber]
        })

        btnStartAutomate.addEventListener("click", () => {

            if(!interval){
                interval = setInterval(() => {
                    const randomNumber = getColor();
                    document.body.style.backgroundColor = colors[randomNumber]
                    label.textContent = colors[randomNumber]    
                }, 1000);

                btnStartAutomate.textContent = "Automating..."
                btnStopAutomate.style.display = "inline-block"
                btn.style.display = "none"
            }
            
        })

        btnStopAutomate.addEventListener("click", () => {
            clearInterval(interval);
            btnStartAutomate.textContent = "Automate it!"
            btnStopAutomate.style.display = "none"
            btn.style.display = "inline-block"
            interval = null;
        })
        

    }

    const getColor = () => {    
        return Math.floor(Math.random() * colors.length);
    }

    return {
        init: () => {
	        start()
        }
    }
}()

App.init()