class Clock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 500);
    }
        


    update(){
        const time = this.getTime();
        const formattedMin = time.minute.toString().padStart(2,'0');
        const formattedSec = time.second.toString().padStart(2,"0");
        const clockTime = `${time.hour}:${formattedMin}:${formattedSec}`;
        const amPm = time.isAm ? "AM" : "PM";
        
        this.element.querySelector(".clockTime").textContent = clockTime;
        this.element.querySelector(".clockAmPm").textContent = amPm;

    }

    getTime() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            second: now.getSeconds(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new Clock(clockElement);

clockObject.start();