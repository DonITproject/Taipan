import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {Trainer, Trainers} from "../trainers/trainers.component";

export interface Contact {
  subtitle: string;
  description?: string;
  email?: string;
  phone?: string;
  map?: string;
  workingHours?: string;
  buttonSendCaption: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  config: Contact =  {
    subtitle: "Записатись",
    description: "Залишіть Ваш телефон і наші менеджери зв'яжуться з Вами найближчим часом",
    email: "taipan@website.com",
    phone: "+123 456 789",
    map: "ЖК Софіївська сфера, Київська область",
    workingHours: "9:00 AM - 6:00 PM",
    buttonSendCaption: "Записатись"
  };
  contactForm!: UntypedFormGroup;
  errormessage: any = " Please enter a name*";

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });

  }

  ValidateFrom() {
    var name = this.contactForm.get("name")!.value;
    var phone = this.contactForm.get("phone")!.value;
    if (name == "" || name == null) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a name*</div>";
      return false;
    }
    if (phone == "" || phone == null) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a phone*</div>";
      return false;
    }
    return true
  }

  sendMsg() {
    if (this.ValidateFrom()) {
      document.getElementById('error-msg')!.innerHTML =""
    }
  }
}