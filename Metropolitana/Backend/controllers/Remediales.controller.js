import {modelo} from '../models/user.model.js'

export const test = () => {
        console.log('LLamando la funcion de test')
}

modelo.create({
    name:"Remediales"
})
