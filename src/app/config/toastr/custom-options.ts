import { ToastOptions } from 'ng2-toastr'

export class ToastrCustomOptions extends ToastOptions {
    toastLife: number = 1000;
    showCloseButton: boolean = true;    
}