const data = {
    cairo: {
        temp: "28°C",
        desc: "Sunny",
        icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png"
    },
    paris: {
        temp: "18°C",
        desc: "Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/128/414/414825.png"
    },
    istanbul: {
        temp: "22°C",
        desc: "Rainy",
        icon: "https://cdn-icons-png.flaticon.com/128/414/414974.png"
    },
    moscow: {
        temp: "16°C",
        desc: "Windy",
        icon: "https://cdn-icons-png.flaticon.com/128/3075/3075858.png"
    },
    rome: {
        temp: "25°C",
        desc: "Partly Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/128/1779/1779807.png"
    }
    ,
    london: {
        temp: "20°C",
        desc: "Cloudy",
        icon: "https://cdn-icons-png.flaticon.com/128/414/414825.png"
    }
};

function showWeather() {
    const city = document.getElementById("citySelect").value;
    const result = document.getElementById("weatherResult");
    const icon = document.getElementById("weatherIcon");
    const temp = document.getElementById("temperature");
    const desc = document.getElementById("description");

    icon.src = data[city].icon;
    temp.innerText = "Temperature: " + data[city].temp;
    desc.innerText = "Condition: " + data[city].desc;

    result.classList.add("show-result");
}

document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
// befor the header and the footer

// const data = {
//     cairo: {
//         temp: "28°C",
//         desc: "Sunny",
//         icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png"
//     },
//     paris: {
//         temp: "18°C",
//         desc: "Cloudy",
//         icon: "https://cdn-icons-png.flaticon.com/128/414/414825.png"
//     },
//     tokyo: {
//         temp: "22°C",
//         desc: "Rainy",
//         icon: "https://cdn-icons-png.flaticon.com/128/414/414974.png"
//     },
//     newyork: {
//         temp: "16°C",
//         desc: "Windy",
//         icon: "https://cdn-icons-png.flaticon.com/128/3075/3075858.png"
//     },
//     rome: {
//         temp: "25°C",
//         desc: "Partly Cloudy",
//         icon: "https://cdn-icons-png.flaticon.com/128/1779/1779807.png"
//     }
// };

// function showWeather() {
//     const city = document.getElementById("citySelect").value;
//     const result = document.getElementById("weatherResult");
//     const icon = document.getElementById("weatherIcon");
//     const temp = document.getElementById("temperature");
//     const desc = document.getElementById("description");

//     icon.src = data[city].icon;
//     temp.innerText = "Temperature: " + data[city].temp;
//     desc.innerText = "Condition: " + data[city].desc;

//     result.classList.add("show-result");
// }

// const toggleButton = document.getElementById("toggleMode");
// toggleButton.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
// });