import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidator {
    static validCampo(valid : string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const  valor = control.value
            const  valorCampo = control.root.get(valid)?.value
            if(valor !== valorCampo){
                return {validCampo: true}
            }
            return null;
        }
    }
}