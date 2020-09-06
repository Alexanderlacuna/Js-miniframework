class Router{
	constructor(app){

		this.app=app;
		this.routes=[]
		this.hashChange=this.hashChange.bind(this)
		window.addEventListener("hashchange",this.hashChange)


		window.addEventListener("DOMContentLoaded",this.hashChange)

	}

	addRoute(name,path){
		this.routes.push({
			name,
			path
		})
	}

	hashChange(){
		// console.log(window.location.hash)

		console.log("changed")

		const {hash}=window.location
		const route=this.routes.find(route=>{

			console.log(route)

			return hash.match(new RegExp(route.path))

		})
		if (route) {

			const params=new RegExp(route.path).exec(hash)
             this.params=params
			
			console.log(route)
			this.app.showComponent(route.name)
			// statement
		}
	}
}

export default Router