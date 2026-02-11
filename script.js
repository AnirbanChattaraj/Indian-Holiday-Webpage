const holidays = [

    // 🇮🇳 NATIONAL HOLIDAYS
    {
        name: "Republic Day",
        date: "January 26",
        state: "All India",
        description: "Marks the adoption of the Indian Constitution in 1950. Celebrated with grand parades in New Delhi."
    },
    {
        name: "Independence Day",
        date: "August 15",
        state: "All India",
        description: "Celebrates India's independence from British rule in 1947."
    },
    {
        name: "Gandhi Jayanti",
        date: "October 2",
        state: "All India",
        description: "Birth anniversary of Mahatma Gandhi, the Father of the Nation."
    },

    // 🌾 JANUARY
    {
        name: "Pongal",
        date: "January 14",
        state: "Tamil Nadu",
        description: "Harvest festival thanking the Sun God for prosperity."
    },
    {
        name: "Makar Sankranti",
        date: "January 14",
        state: "All India",
        description: "Marks the transition of the Sun into Capricorn. Celebrated with kite flying and sweets."
    },
    {
        name: "Lohri",
        date: "January 13",
        state: "Punjab",
        description: "Harvest festival celebrated with bonfires and traditional dances."
    },

    // 🌸 MARCH
    {
        name: "Holi",
        date: "March (Varies)",
        state: "All India",
        description: "Festival of colors symbolizing victory of good over evil."
    },

    // 🌙 RAMADAN / EID
    {
        name: "Eid-ul-Fitr",
        date: "Varies (Lunar Calendar)",
        state: "All India",
        description: "Marks the end of Ramadan, celebrated with prayers and feasting."
    },

    // 🪔 DIWALI
    {
        name: "Diwali",
        date: "October/November (Varies)",
        state: "All India",
        description: "Festival of lights celebrating Lord Rama’s return to Ayodhya."
    },

    // 🐘 GANESH FESTIVAL
    {
        name: "Ganesh Chaturthi",
        date: "August/September (Varies)",
        state: "Maharashtra",
        description: "Celebrates the birth of Lord Ganesha."
    },

    // 🌺 DURGA PUJA
    {
        name: "Durga Puja",
        date: "September/October (Varies)",
        state: "West Bengal",
        description: "Celebrates Goddess Durga’s victory over Mahishasura."
    },

    // 🌾 BAISAKHI
    {
        name: "Baisakhi",
        date: "April 13",
        state: "Punjab",
        description: "Sikh New Year and harvest festival."
    },

    // 🐅 ONAM
    {
        name: "Onam",
        date: "August/September",
        state: "Kerala",
        description: "Harvest festival welcoming King Mahabali."
    },

    // 🌙 EID UL ADHA
    {
        name: "Eid-ul-Adha",
        date: "Varies (Lunar Calendar)",
        state: "All India",
        description: "Festival of sacrifice commemorating Prophet Ibrahim's devotion."
    },

    // 🎄 CHRISTMAS
    {
        name: "Christmas",
        date: "December 25",
        state: "All India",
        description: "Celebrates the birth of Jesus Christ."
    },

    // 🕉️ MAHASHIVRATRI
    {
        name: "Maha Shivratri",
        date: "February/March (Varies)",
        state: "All India",
        description: "Devotional night dedicated to Lord Shiva."
    },

    // 🪷 RAM NAVAMI
    {
        name: "Ram Navami",
        date: "March/April (Varies)",
        state: "All India",
        description: "Birth anniversary of Lord Rama."
    },

    // 🪔 NAVRATRI
    {
        name: "Navratri",
        date: "September/October (Varies)",
        state: "All India",
        description: "Nine nights dedicated to Goddess Durga."
    },

    // 🌄 CHHATH PUJA
    {
        name: "Chhath Puja",
        date: "October/November",
        state: "Bihar",
        description: "Dedicated to the Sun God, celebrated with river rituals."
    },

    // 🪔 KARWA CHAUTH
    {
        name: "Karwa Chauth",
        date: "October (Varies)",
        state: "North India",
        description: "Married women fast for the well-being of their husbands."
    },

    // 🏹 RATH YATRA
    {
        name: "Rath Yatra",
        date: "June/July (Varies)",
        state: "Odisha",
        description: "Chariot festival of Lord Jagannath in Puri."
    }
];

const container = document.getElementById("holidayContainer");
const filter = document.getElementById("stateFilter");

function displayHolidays(selectedState) {
    container.innerHTML = "";

    const filtered = selectedState === "all"
        ? holidays
        : holidays.filter(h => h.state === selectedState || h.state === "All India");

    filtered.forEach(holiday => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${holiday.name}</h3>
            <div class="date">${holiday.date}</div>
            <div class="state">${holiday.state}</div>
            <p>${holiday.description}</p>
        `;

        container.appendChild(card);
    });
}

filter.addEventListener("change", () => {
    displayHolidays(filter.value);
});

displayHolidays("all");
