import { Component, Input, } from '@angular/core';
import { CommunicationService } from '@minsky/core';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'minsky-available-operations',
    templateUrl: './available-operations.component.html',
    styleUrls: ['./available-operations.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        MatMenuModule,
        NgFor,
    ],
})
export class AvailableOperationsComponent {
  @Input() title = '';
  @Input() operations: string[] = [];

  constructor(public communicationService: CommunicationService) {
  }

  onButtonDrag(event, operation) {
    const be = document.querySelector<HTMLElement>(`#button${operation}`);
    be.click();
    event.event.stopPropagation();
    event.event.preventDefault();
  }
}
