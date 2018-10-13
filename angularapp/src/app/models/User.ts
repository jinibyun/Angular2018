export interface User {
	firstName : string,
	lastName: string,
	age?: number, // optional
	address?: {
		street? : string,
		city?: string,
		state?: string
	},
	image?: string,
	isActive? : boolean,
	balance?: number,
	registered?: any
}