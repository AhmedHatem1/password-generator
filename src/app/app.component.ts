import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password-generator';
  length = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password = ''

  onChangeLength(value) {
    const parsedValue = parseInt(value);
    if (!Number.isNaN(this.length)) {
      this.length = parsedValue;
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }
  onGenerateClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  disableGenerateButton() {
    return !(this.length && (this.includeLetters || this.includeNumbers || this.includeSymbols));
  }
}
