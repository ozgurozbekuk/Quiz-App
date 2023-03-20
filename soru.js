function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni =soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap ===this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi Jasvascript paket yönetim uygulamasıdır?",{a:"node.js",b:"typescript",c:"npm",d:"nuget"},"c"),
    new Soru("2-Hangisi frontend kapsımda değerlendirilmez?",{a:"Css",b:"Html",c:"Javascript",d:"Sql"},"d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?",{a:"Node.js",b:"Typescript",c:"Angular",d:"React"},"a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?",{a:"React",b:"Angular",c:"Vue.js",d:"Asp.net"},"d")

]