import { ErrorHandler, Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable()
export class CustomError implements ErrorHandler{

    constructor(private snackbar: SnackbarService){}
    handleError(error: any): void {
        let message: string;
        if (error.error){
            message = error.error.message;
        } else {
            message = error.message;
        }
        this.snackbar.handleError(message);    
    }

}