document.getElementById("submitBtn").addEventListener("click", function () {

    // Form values lo
    let name = document.getElementById("name").value;
    let cash = Number(document.getElementById("cash").value) || 0;
    let bankBalance = Number(document.getElementById("bankBalance").value) || 0;
    let gold = Number(document.getElementById("goldValue").value) || 0;
    let silver = Number(document.getElementById("silverValue").value) || 0;
    let investments = Number(document.getElementById("investments").value) || 0;
    let businessGoods = Number(document.getElementById("businessGoods").value) || 0;
    let debts = Number(document.getElementById("debts").value) || 0;

    // Total wealth
    let totalWealth = cash + bankBalance + gold + silver + investments + businessGoods - debts;

    const zakatDiv = document.querySelector(".zakat");

    // Step 1 → Purani form ko hide karo aur sirf nisab input show karo
    zakatDiv.innerHTML = `
        <div class="text-center text-white">
            <h2>Enter Current Nisab Rate</h2>
            <input type="number" id="nisabInput" class="form-control mt-3" placeholder="Nisab (PKR)">
            <button id="nisabSubmit" class="sub-btn mt-4">Submit Nisab</button>
        </div>
    `;

    // Step 2 → Jab nisab submit ho, result show karo
    document.getElementById("nisabSubmit").addEventListener("click", () => {

        let nisab = Number(document.getElementById("nisabInput").value) || 0;
        let zakat = totalWealth * 0.025;

        let nisabMessage = "";
        if (totalWealth < nisab) {
            nisabMessage = "You are NOT required to pay Zakat.";
        } else {
            nisabMessage = "You ARE required to pay Zakat.<br>May Allah Accept Your Charity";
        }

        zakatDiv.innerHTML = `
            <div id="result" class="text-center text-white">
                <h2 class="mb-4">Assalamualaikum, ${name || "User"}!</h2>
                <p style="font-size:20px;">Your <strong>Total Wealth</strong> is: PKR <b>${totalWealth.toFixed(2)}</b></p>
                <p style="font-size:20px;">Your <strong>Zakat (2.5%)</strong> is: PKR <b>${zakat.toFixed(2)}</b></p>
                <p style="font-size:20px; font-weight:bold; margin-top:20px;">${nisabMessage}</p>
                <button id="backBtn" class="sub-btn mt-4">← Go Back</button>
            </div>
        `;

        // Back
        document.getElementById("backBtn").addEventListener("click", () => {
            location.reload();
        });
    });

});
