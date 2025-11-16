# GitFame

## Tanıtım

GitFame, GitHub profiliniz hakkında **acımasızca dürüst** bir analiz sunan yapay zeka destekli bir araçtır. Proje, bir GitHub Roast Me ile Spotify Wrapped'in buluşması gibi düşünülebilir.

Yapay zeka, kod kalitenizi, taahhüt mesajlarınızı ("Judging commit messages...") ve kodlama alışkanlıklarınızı ("Counting console.logs...") analiz eder ve sosyal medyada paylaşılmaya hazır, viral kartlar oluşturur.

## Özellikler

GitFame'in temel özellikleri şunlardır:

  * **Yapay Zeka Analizi:** Yapay zeka, kişiselleştirilmiş "roast"lar (alaycı yorumlar) oluşturmak için taahhütlerinizi, kod kalitenizi ve kalıplarınızı analiz eder.
  * **Paylaşılabilir Kartlar:** Twitter ve LinkedIn için optimize edilmiş, güzel, viral olmaya hazır kartlar.
  * **Geliştirici İçgörüleri:** Etkileşimli grafiklerle kodlama kalıplarınız, dilleriniz ve aktiviteniz hakkında derinlemesine bilgi edinin.
  * **Başarılar:** GitHub aktivitenize ve kilometre taşlarınıza göre rozetlerin ve başarıların kilidini açın.
  * **Karşılaştırma:** Arkadaşlarınıza meydan okuyun ve diğer geliştiricilerle nasıl karşılaştırıldığınızı görün.
  * **Yıllık Özet (Wrapped):** İstatistikler, öne çıkanlar ve roast'lar içeren yıllık GitHub özetinizi alın.

## Nasıl Çalışır

GitFame deneyimi 3 basit adımdan oluşur:

1.  **GitHub'a Bağlanın:** GitHub hesabınızla saniyeler içinde oturum açın.
2.  **Roast Edilin:** Yapay zeka profilinizi analiz eder ve size özel roast'unuzu oluşturur.
3.  **Paylaşın ve Gösteriş Yapın:** Kartınızı indirin ve dünyayla paylaşın.

## Kurulum

Proje bir Next.js uygulamasıdır ve yerel olarak çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Teknoloji Yığını

  * **Frontend Çerçevesi:** Next.js
  * **Dil:** TypeScript
  * **Stil:** Tailwind CSS ve shadcn/ui bileşenleri
  * **Grafikler:** Recharts
  * **Animasyonlar:** Framer Motion

### Yerel Geliştirme

1.  **Bağımlılıkları Kurun:**

    ```bash
    npm install # veya yarn install, pnpm install
    ```

2.  **Geliştirme Sunucusunu Başlatın:**

    ```bash
    npm run dev
    # veya yarn dev, pnpm dev
    ```

3.  Uygulama artık `http://localhost:3000` adresinde çalışıyor olmalıdır.

### Komutlar

Aşağıdaki komutlar `package.json` dosyasında tanımlanmıştır:

  * `npm run dev`: Geliştirme sunucusunu başlatır.
  * `npm run build`: Üretim için projeyi oluşturur.
  * `npm run start`: Üretim derlemesini başlatır.
  * `npm run lint`: ESLint'i çalıştırır.

## API Dokümantasyonu

GitFame, uygulamalarınıza entegre edebileceğiniz bir geliştirici API'si sunar.

### Hızlı Başlangıç

```bash
curl -X GET "https://api.gitfame.dev/roast/octocat" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Temel Uç Noktalar

| Metot | Yol | Açıklama |
| :--- | :--- | :--- |
| `GET` | `/api/roast/:username` | Bir GitHub kullanıcısı için roast verilerini alın. |
| `GET` | `/api/compare/:user1/:user2` | İki GitHub kullanıcısını karşılaştırın. |
| `GET` | `/api/leaderboard` | En iyi geliştiricileri alın. |
