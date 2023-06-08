import {Injectable} from '@angular/core'
import { AbstractControl } from '@angular/forms';

@Injectable({providedIn: 'root'})

export class BaseForm{


    constructor(){}

    isValidField(form: AbstractControl|null){
        var flag = false;
        if (form != null) {
            flag = form.touched || form.dirty && !form.valid;
        }
        return flag;
    }

    getErrorMessage(form: AbstractControl|null){
        let message = "";
        if (form) {
            const {errors} = form;
            if (errors) {
                const messages: any = {
                    required:'Campo requerido',
                    email:'Formato no valido',
                    pattern:'Formato invalido',
                    minError: 'El rango no es correcto',
                    min:'El rango no es correcto',
                    max:'El rango no es correcto',
                }

                const erorKey = Object.keys(errors).find(Boolean);
                if (erorKey) {
                    message = messages[erorKey];
                }

            }
        }
        return message;
    }

}