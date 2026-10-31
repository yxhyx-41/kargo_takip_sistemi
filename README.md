# kargo\_takip\_sistemi

Python ve Flask ile geliştirilmiş kargo takip sistemi

\# 📦 Kargo Takip Sistemi



Python ve Flask kullanılarak geliştirilen, kargo kayıtlarını yönetmek ve takip etmek amacıyla hazırlanmış bir web uygulaması.



\## ✨ Özellikler



\- Kargo kayıtlarını görüntüleme ve takip etme

\- Web arayüzü üzerinden kargo bilgilerini yönetme

\- SQLite veritabanı kullanımı

\- HTML şablonlarıyla dinamik sayfalar oluşturma



\## 🛠️ Kullanılan Teknolojiler



\- \*\*Python\*\*

\- \*\*Flask\*\*

\- \*\*SQLite\*\*

\- \*\*HTML, CSS ve JavaScript\*\*



\## 📁 Proje Yapısı



```text

kargo\_takip\_sistemi/

├── app.py

├── templates/

├── static/

├── .gitignore

└── README.md

```



> Veritabanı dosyası (`kargo.db`), gizlilik ve veri güvenliği amacıyla Git deposuna eklenmemiştir.



\## 🚀 Kurulum



\### 1. Depoyu klonlayın



```bash

git clone GITHUB\_DEPO\_ADRESINIZ

cd kargo-takip-sistemi

```



`GITHUB\_DEPO\_ADRESINIZ` yerine GitHub'daki deponun gerçek adresini yazın.



\### 2. Sanal ortam oluşturun



```bash

python -m venv .venv

```



Windows üzerinde etkinleştirmek için:



```powershell

.venv\\Scripts\\activate

```



\### 3. Gerekli paketleri yükleyin



Flask kurulu değilse:



```bash

pip install flask

```



Projede başka Python paketleri kullanılıyorsa onları da yüklemek gerekir.



\### 4. Uygulamayı çalıştırın



```bash

python app.py

```



Terminalde gösterilen yerel adresi tarayıcıda açın. Flask uygulaması genellikle `http://127.0.0.1:5000` adresini kullanır; kesin adres `app.py` yapılandırmasına bağlıdır.



\## 🔒 Güvenlik



\- Veritabanı ve gizli yapılandırma dosyaları Git deposuna eklenmemelidir.

\- Gerçek kişilere ait kargo ve iletişim bilgileri kullanılmamalıdır.

\- Test ve geliştirme ortamında sahte veriler tercih edilmelidir.



\## 📌 Proje Hakkında



Bu proje, Python ile web uygulaması geliştirme, veritabanı kullanımı ve temel kargo takip iş akışlarını uygulamalı olarak öğrenmek amacıyla hazırlanmıştır.

