const cargos = [
    {
        trackingNo: "KRG1001",
        sender: "Ahmet Yılmaz",
        receiver: "Yahya Aydın",
        status: "Dağıtımda",
        location: "Elazığ Dağıtım Merkezi"
    },
    {
        trackingNo: "KRG1002",
        sender: "Mehmet Kaya",
        receiver: "Ayşe Demir",
        status: "Kargoda",
        location: "Malatya Transfer Merkezi"
    },
    {
        trackingNo: "KRG1003",
        sender: "Zeynep Çelik",
        receiver: "Ali Şahin",
        status: "Teslim Edildi",
        location: "Elazığ Merkez"
    },
    {
        trackingNo: "KRG1004",
        sender: "Burak Acar",
        receiver: "Merve Yıldız",
        status: "Hazırlanıyor",
        location: "İstanbul Gönderici Şubesi"
    }
];


function trackCargo() {
    const trackingNumber =
        document.getElementById("trackingNumber").value.trim().toUpperCase();

    const result = document.getElementById("result");

    if (trackingNumber === "") {
        result.innerHTML = `
            <div class="error">
                Lütfen bir takip numarası giriniz.
            </div>
        `;
        return;
    }

    const cargo = cargos.find(
        item => item.trackingNo === trackingNumber
    );

    if (cargo) {
        result.innerHTML = `
            <div class="cargo-result">
                <h3>Kargo Bilgileri</h3>
                <p><strong>Takip No:</strong> ${cargo.trackingNo}</p>
                <p><strong>Gönderici:</strong> ${cargo.sender}</p>
                <p><strong>Alıcı:</strong> ${cargo.receiver}</p>
                <p><strong>Durum:</strong> ${cargo.status}</p>
                <p><strong>Konum:</strong> ${cargo.location}</p>
            </div>
        `;
    } else {
        result.innerHTML = `
            <div class="error">
                ${trackingNumber} numaralı kargo bulunamadı.
            </div>
        `;
    }
}


function showCargos() {
    const table = document.getElementById("cargoTable");

    let html = `
        <table class="cargo-table">
            <thead>
                <tr>
                    <th>Takip No</th>
                    <th>Gönderici</th>
                    <th>Alıcı</th>
                    <th>Durum</th>
                    <th>Konum</th>
                </tr>
            </thead>
            <tbody>
    `;

    cargos.forEach(cargo => {
        html += `
            <tr>
                <td>${cargo.trackingNo}</td>
                <td>${cargo.sender}</td>
                <td>${cargo.receiver}</td>
                <td>${cargo.status}</td>
                <td>${cargo.location}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    table.innerHTML = html;
}document.getElementById("cargoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const sender = document.getElementById("sender").value.trim();
    const receiver = document.getElementById("receiver").value.trim();
    const location = document.getElementById("location").value.trim();

    const newNumber = "KRG" + (1000 + cargos.length + 1);

    const newCargo = {
        trackingNo: newNumber,
        sender: sender,
        receiver: receiver,
        status: "Hazırlanıyor",
        location: location
    };

    cargos.push(newCargo);

    document.getElementById("createMessage").innerHTML = `
        <div class="cargo-result">
            <strong>Kargo başarıyla oluşturuldu.</strong><br><br>
            Takip Numaranız: <strong>${newNumber}</strong>
        </div>
    `;

    document.getElementById("cargoForm").reset();
});