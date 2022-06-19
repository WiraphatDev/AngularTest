import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {}

  // ----------------------------------- Chip --------------------------------------------------------
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'SONG' }, { name: 'ANIME' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }
    // Clear the input value
    event.chipInput!.clear();
  }
  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

   // ----------------------------------- Chip2 --------------------------------------------------------
   addOnBlur2 = true;
   readonly separatorKeysCodes2 = [ENTER, COMMA] as const;
   fruits2: Fruit[] = [{ name: 'K-POP' }, { name: 'T-POP' }];
 
   add2(event: MatChipInputEvent): void {
     const value = (event.value || '').trim();
     // Add our fruit
     if (value) {
       this.fruits2.push({ name: value });
     }
     // Clear the input value
     event.chipInput!.clear();
   }
   remove2(fruit2: Fruit): void {
     const index = this.fruits2.indexOf(fruit2);
 
     if (index >= 0) {
       this.fruits2.splice(index, 1);
     }
   }

  // ----------------------------------- Picture --------------------------------------------------------

  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;
  imagePreviewSrc2: string | ArrayBuffer | null | undefined = '';
  isImageSelected2: boolean = false;

  showPreview(event: Event) {
    let selectedFile = (event.target as HTMLInputElement).files?.item(0);

    if (selectedFile) {
      if (
        ['image/jpeg', 'image/png', 'image/svg+xml'].includes(selectedFile.type)
      ) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile);

        fileReader.addEventListener('load', (event) => {
          this.imagePreviewSrc = event.target?.result;
          this.isImageSelected = true;
        });
      }
    } else {
      this.isImageSelected = false;
    }
  }

  showPreview2(event: Event) {
    let selectedFile = (event.target as HTMLInputElement).files?.item(0);

    if (selectedFile) {
      if (
        ['image/jpeg', 'image/png', 'image/svg+xml'].includes(selectedFile.type)
      ) {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(selectedFile);

        fileReader.addEventListener('load', (event) => {
          this.imagePreviewSrc2 = event.target?.result;
          this.isImageSelected2 = true;
        });
      }
    } else {
      this.isImageSelected2 = false;
    }
  }

  // ----------------------------------- Slider --------------------------------------------------------

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
