![react-starter-kit_banner](https://user-images.githubusercontent.com/21248156/51554026-5100c780-1e85-11e9-8c32-56acce9dd19b.jpg)

# React & Node Js (Express JS)  Birlikte Çalıştırma

## React ile birlikte backend tarafında çalışacak olan rest api uygulamamızı  tek bir proje üzerinden nasıl ayağa kaldırılacağı ile ilgili bir başlangıç kitidir. Önceki react starter kit ile birleştirilmiştir.

### Paket İçeriği 

 #### Client Tarafı
 * React 16.7
 * Redux 4.0.1
 * Bootstrap 3
 * React-Bootstrap
 * React Scripts
 * Redux Thunk
 * Redux Logger
 * Redux Promise
 * React Router
 * React Router Dom
 * Axios
 * Sass
 
 #### Server Tarafı
 * body-parser
 * cors
 * express
 * nodemon
 
 # Ana dizine kurulan paketler
 * concurrently
 * babel-cli
 * babel-core
 * babel-loader
 * babel-preset-env
  
### Kurulum
  
  * Projeyi kopyaladıktan sonra 'npm install' komutu ile bağımlılıkları yüklüyoruz.
  * Daha sonra 'cd client'  komutu ile client dizinine geçip client tarafının bağımlılıklarını 'npm install' diyerek yüklüyoruz.
  * Aynı şekilde server tarafına 'cd server' diyip 'npm install' komutunu çalıştırıyoruz
  * Yükleme tamamlandıktan sonra üst dizine gelip 'npm run dev' ile development ortamında projeyi ayağa kaldırabilirsiniz.
  * 3000 portunda client tarafı 5000 portunda server tarafı çalışmaktadır.
