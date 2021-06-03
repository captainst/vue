//console.log('hello, vue')
const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am the template</h2>'
  data() {
      return {
          url: 'http://www.thenetninjia.net',
          showBooks: true,
          title: 'The Final Empire',
          author: 'Brandon Sanderson',
          age: 45,
          x: 0,
          y: 0,
          books:[
              {title:'name of the wind', author:'patrick rothfuss', img: 'assets/1.png', isFav: true},
              {title:'harry potter', author:'christina',  img: 'assets/2.png', isFav: false},
              {title:'I have a dread', author:'arther',  img: 'assets/3.png', isFav: true}
          ]
      }
  },
  methods:{
      changeTitle(title){
          //console.log('you clicked me')
          this.title = title //'Words of Randiance'
      },
      toggleShowBooks(){
          this.showBooks = !this.showBooks
      },
      handleEvent(e, data){
          console.log(e, e.type)
          if (data) {
              console.log(data)
          }
      },
      handleMousemove(e) {
          this.x = e.offsetX
          this.y = e.offsetY
      },
      handleClickFav(e, book) {
          //console.log(e)
          console.log(book)
          book.isFav = !book.isFav
      }
  }
})

app.mount('#app')