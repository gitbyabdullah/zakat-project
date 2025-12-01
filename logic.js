document.getElementById("submitBtn").addEventListener("click", function () {

    // Input values lo
    let name = document.getElementById("name").value;
    let cash = Number(document.getElementById("cash").value);
    let bankBalance = Number(document.getElementById("bankBalance").value);
    let gold = Number(document.getElementById("goldValue").value);
    let silver = Number(document.getElementById("silverValue").value);
    let investments = Number(document.getElementById("investments").value);
    let businessGoods = Number(document.getElementById("businessGoods").value);
    let debts = Number(document.getElementById("debts").value);

    // Total wealth calculate karo
    let totalWealth = cash + bankBalance + gold + silver + investments + businessGoods - debts;
    let zakat = totalWealth * 0.025;

    // Nisab value (example: 59500 PKR — 1 year gold nisab approx.)
    let nisab = 59500;

    // Reference lo main Zakat div ka
    const zakatDiv = document.querySelector(".zakat");

    // Purani content hatado (heading, inputs, button)
    zakatDiv.innerHTML = "";

    // Nisab check
    let nisabMessage = "";
    if(totalWealth < nisab){
        nisabMessage = "You are NOT required to pay Zakat.";
    } else {
        nisabMessage = "You ARE required to pay Zakat.\n May Allah Accept Your Charity";
        console.log("May Allah Accept Your Charity")
    }

    // Ab result show karo
    const resultHTML = `
        <div id="result" class="text-center text-white">
            <h2 class="mb-4">Assalamualaikum, ${name || "User"}!</h2>
            <p style="font-size:20px;">Your <strong>Total Wealth</strong> is: PKR <b>${totalWealth.toFixed(2)}</b></p>
            <p style="font-size:20px;">Your <strong>Zakat (2.5%)</strong> is: PKR <b>${zakat.toFixed(2)}</b></p>
            <p style="font-size:20px; font-weight:bold; margin-top:20px;">${nisabMessage}</p>
            <button id="backBtn" class="sub-btn mt-4">← Go Back</button>
        </div>
    `;

    zakatDiv.innerHTML = resultHTML;

    // Back button add karo (dobara input show karne ke liye)
    document.getElementById("backBtn").addEventListener("click", () => {
        location.reload(); // simple way — page refresh hoga aur form wapas aa jayega
    });
});
