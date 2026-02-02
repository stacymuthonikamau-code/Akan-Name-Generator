document.getElementById("akanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const DD = parseInt(document.getElementById("day").value);
    const MM = parseInt(document.getElementById("month").value);
    const YYYY = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    const CC = Math.floor(YYYY / 100);  
    const YY = YYYY % 100;              

    let d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7;

    if (d < 0) d += 7;

    console.log("Day of the week index:", d);

    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = daysOfWeek[d];

    console.log("Day of the week:", dayName);

    const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    let akanName;
    if(gender === "male") {
        akanName = maleNames[d];
    } else if(gender === "female") {
        akanName = femaleNames[d];
    } else {
        akanName = "Unknown";
    }

    const resultSection = document.querySelector("section");
    resultSection.innerHTML = `<p>Congratulations! Your Akan name is <strong>${akanName}</strong>.<br>
                               You were born on a <strong>${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d]}</strong>.</p>`;
});

