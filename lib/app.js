class App{

	
	constructor(selector){
		this.appElement=document.querySelector(selector)

		this.components={}

		console.log("hello world")
	}

	addComponent(component){
		this.components[component.name]=component
		component.model=this.proxify(component.model)
	}

	showComponent(name){

		console.log(name)

		this.currentComponent=this.components[name]

		this.updateView();

		if (this.currentComponent) {
			this.currentComponent.controller(this.currentComponent.model)
			// statement
		}

	}

	updateView(){
		if (this.currentComponent) {
			this.appElement.innerHTML=this.currentComponent.view(this.currentComponent.model)
			// statement
		}
	}

	proxify(model){
		return new Proxy(model,{
			set:(target,property,value)=>{
				console.log("changing ",property ,'from',target[property],'to',value)

				target[property]=value

				this.updateView()
				return true
			}
		})

	}


}

export default App