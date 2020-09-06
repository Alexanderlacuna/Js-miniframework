export default {


	async getDogs(){
		const response=await fetch("https://barkwireapi.brooks.now.sh/dogs")

		// console.log(aw)

		// const data=await response.json()

		// console.log("working",await response.json())
		// console.log(response.json())
		return  response.json()
	},
	async getDog(id){
		const response=await fetch(`https://barkwireapi.brooks.now.sh/dogs/${id}`)

		console.log("calling one function")
		return response.json()

		// console.log(aw)

		// const data=await response.json()

		// console.log("working",await response.json())
		// console.log(response.json())
		return  response.json()
	}
}

