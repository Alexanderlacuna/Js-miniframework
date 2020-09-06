
import App from "./lib/app.js"
import Router from "./lib/router.js"
import API from "./lib/API.js"
// import data from "./data.js"
const app=new App("#app")
const router=new Router(app)

const dogTemplate=(dog)=>`
 <section >

 <a href="#/dogs/${dog.id}">
 <h3>${dog.name} </h3>
 <figure>
   <img src="${dog.url}" class="control_dog" alt="${dog.name}"
 </figure>


 </section>

`


app.addComponent({
	name:"dogs",
	model:{
		dogs:[]
	},
	view(model){
		return `<ul class="control_dogs">

		${model.dogs.map((dog)=>`<li> ${dogTemplate(dog)}</li>`).join()}

		</ul>`



	},

	async controller(model){
		const dogs=await API.getDogs()
		// console.log(dogs)
		model.dogs=dogs
		// app.updateView()

	}


})

app.addComponent({
	name:"dog",
	model:{
		dog:{}
	},
	view(model){
		return dogTemplate(model.dog)



	},

	async controller(model){
		const dog=await API.getDog(router.params[1])
		console.log(dog)
		model.dog=dog
		// app.updateView()

	}


})



// app.showComponent('dogs')
router.addRoute('dogs',"^#/dogs$")
router.addRoute("dog",'^#/dogs/([0,9]+)$')
// console.log(awAPI.getDogs())
// let data = API.getDogs().then((response)=>response.json())
// console.log(data)

