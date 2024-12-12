import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private alertController: AlertController) {}

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    // Validation des champs
    if (!this.isValidName(this.contactData.name)) {
      await this.showAlert('Erreur', 'Veuillez entrer un nom valide.');
      return;
    }

    if (!this.isValidEmail(this.contactData.email)) {
      await this.showAlert('Erreur', 'Veuillez entrer un email valide.');
      return;
    }

    if (!this.contactData.message.trim()) {
      await this.showAlert('Erreur', 'Le message ne peut pas être vide.');
      return;
    }

    // Afficher un message de succès
    await this.showAlert('Succès', 'Votre message a été envoyé avec succès.');
    this.resetForm();
  }

  isValidName(name: string): boolean {
    // Vérifier que le nom contient au moins deux caractères alphabétiques
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    return nameRegex.test(name.trim());
  }

  isValidEmail(email: string): boolean {
    // Vérifier que l'email est au bon format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  }

  async showAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  resetForm(): void {
    this.contactData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
