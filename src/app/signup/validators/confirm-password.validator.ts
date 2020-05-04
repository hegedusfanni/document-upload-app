import {FormGroup} from '@angular/forms';

export function confirmPasswordValidator(group: FormGroup) {
  const passControl = group.controls.password;
  const confirmPassControl = group.controls.psconfirm;

  if (!confirmPassControl.value) {
    return;
  }

  if (passControl.value !== confirmPassControl.value) {
    confirmPassControl.setErrors({ psconfirm: true });
  } else {
    confirmPassControl.setErrors(null);
  }
}
