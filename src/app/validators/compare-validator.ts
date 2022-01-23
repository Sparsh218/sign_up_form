import { FormGroup } from "@angular/forms";

export function StringCompare (
    firstString: string,
    compareString: string
) {
    return (formGroup: FormGroup) => {
        const first = formGroup.controls[firstString];
        const second = formGroup.controls[compareString];

        if (first.value !== second.value) {
            second.setErrors({mustmatch: true});
        } else {
            second.setErrors(null);
        }
    }
}